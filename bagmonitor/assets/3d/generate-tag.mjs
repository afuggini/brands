/**
 * Generates bagmonitor-tag.glb — MTB09 tracker tag (22.9mm ⌀ × 6.3mm thick).
 * White plastic disc with a flat D-ring bail on top.
 * Run: node generate-tag.mjs
 * No npm dependencies.
 */

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Lathe (surface of revolution around Z axis) ─────────────────────────────
// The Z axis is the disc's thickness axis; disc faces point toward ±Z.
// Profile {r, y}: r = radial distance in XY plane, y = Z position.

function buildLatheMesh(profile, slices) {
  const P = profile.length;

  const pn = profile.map((p, i) => {
    const a = profile[Math.max(0, i - 1)];
    const b = profile[Math.min(P - 1, i + 1)];
    let nr = -(b.y - a.y);
    let ny =  (b.r - a.r);
    const l = Math.hypot(nr, ny) || 1;
    return { nr: nr / l, ny: ny / l };
  });

  const positions = [], normals = [], indices = [];
  for (let s = 0; s <= slices; s++) {
    const theta = (s / slices) * Math.PI * 2;
    const cosT = Math.cos(theta), sinT = Math.sin(theta);
    for (let p = 0; p < P; p++) {
      const { r, y } = profile[p];
      const { nr, ny } = pn[p];
      positions.push(r * cosT, r * sinT, y);
      normals.push(nr * cosT, nr * sinT, ny);
    }
  }

  for (let s = 0; s < slices; s++) {
    for (let p = 0; p < P - 1; p++) {
      const a = s * P + p, b = s * P + p + 1;
      const c = (s + 1) * P + p, d = (s + 1) * P + p + 1;
      indices.push(a, b, c, b, d, c);
    }
  }
  return { positions, normals, indices };
}

// ─── Tube with arbitrary cross-section along a closed planar path ────────────
// pathPoints: [{x,y,z}] in the XY plane (z varies per point).
// section: [{u, v, nu, nv}] — u = in-plane radial, v = Z offset.
// Frame: binormal = world Z, in-plane normal = tangent × Z.

function buildTubeMesh(pathPoints, section) {
  const N = pathPoints.length, S = section.length;
  const positions = [], normals = [], indices = [];

  for (let i = 0; i < N; i++) {
    const curr = pathPoints[i];
    const next = pathPoints[(i + 1) % N];
    const prev = pathPoints[(i - 1 + N) % N];
    let tx = next.x - prev.x, ty = next.y - prev.y;
    const tl = Math.hypot(tx, ty) || 1;
    tx /= tl; ty /= tl;
    const nx = ty, ny = -tx; // in-plane normal

    for (let s = 0; s < S; s++) {
      const { u, v, nu, nv } = section[s];
      positions.push(curr.x + u * nx, curr.y + u * ny, curr.z + v);
      normals.push(nu * nx, nu * ny, nv);
    }
  }

  for (let i = 0; i < N; i++) {
    const ni = (i + 1) % N;
    for (let s = 0; s < S; s++) {
      const ns = (s + 1) % S;
      const a = i * S + s, b = i * S + ns;
      const c = ni * S + s, d = ni * S + ns;
      indices.push(a, c, b, b, c, d);
    }
  }
  return { positions, normals, indices };
}

// ─── Disc profile ─────────────────────────────────────────────────────────────

function buildDiscProfile() {
  const R     = 11.45; // outer radius (22.9mm diameter)
  const H     = 3.15;  // half-thickness (6.3mm total)
  const BEVEL = 0.6;   // rim bevel radius — sharp coin chamfer, not a pebble
  const FACE  = R - BEVEL;
  const WALL  = H - BEVEL;
  const BSTEP = 12;

  const pts = [];
  // Centre of face (Z=H)
  pts.push({ r: 0, y: H });
  pts.push({ r: FACE, y: H });
  // Top rim bevel: 90° → 0° arc
  for (let i = 1; i <= BSTEP; i++) {
    const a = ((90 - 90 * (i / BSTEP)) * Math.PI) / 180;
    pts.push({ r: FACE + BEVEL * Math.cos(a), y: WALL + BEVEL * Math.sin(a) });
  }
  // Bottom rim bevel: 0° → -90° arc
  for (let i = 1; i <= BSTEP; i++) {
    const a = ((0 - 90 * (i / BSTEP)) * Math.PI) / 180;
    pts.push({ r: FACE + BEVEL * Math.cos(a), y: -WALL + BEVEL * Math.sin(a) });
  }
  // Bottom face (Z=-H)
  pts.push({ r: FACE, y: -H });
  pts.push({ r: 0, y: -H });
  return pts;
}

// ─── Flat strap cross-section ─────────────────────────────────────────────────
// Produces a flat rounded-rectangle section.
// hu = half-width in the u (in-plane radial) direction  → wide face of strap
// hv = half-depth in the v (Z)  direction               → thin edge of strap
// cr = corner radius (small so strap stays flat), seg = segments per corner.

function flatStrapSection(hu, hv, cr, seg) {
  const corners = [
    { cx:  (hu - cr), cy:  (hv - cr), a0: 0,   a1: 90  },
    { cx: -(hu - cr), cy:  (hv - cr), a0: 90,  a1: 180 },
    { cx: -(hu - cr), cy: -(hv - cr), a0: 180, a1: 270 },
    { cx:  (hu - cr), cy: -(hv - cr), a0: 270, a1: 360 },
  ];
  const pts = [];
  for (const c of corners) {
    for (let i = 0; i < seg; i++) {
      const t = i / seg;
      const ang = ((c.a0 + (c.a1 - c.a0) * t) * Math.PI) / 180;
      pts.push({
        u:  c.cx + cr * Math.cos(ang),
        v:  c.cy + cr * Math.sin(ang),
        nu: Math.cos(ang),
        nv: Math.sin(ang),
      });
    }
  }
  return pts;
}

// ─── Bail path (oval loop, lying flat in the XY plane) ───────────────────────
// The oval is centred above the disc rim (disc rim at Y ≈ 11.45).
// Bottom of the oval dips into the disc body — that part is hidden.

function buildBailPath(segments) {
  const aX = 3.5;   // horizontal semi-axis of bail centreline
  const aY = 2.7;   // vertical semi-axis
  const cY = 12.3;  // Y centre of oval (bail arch sits here)
  const pts = [];
  for (let i = 0; i < segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    pts.push({ x: aX * Math.cos(theta), y: cY + aY * Math.sin(theta), z: 0 });
  }
  return pts;
}

// ─── Build geometry ───────────────────────────────────────────────────────────

const discMesh = buildLatheMesh(buildDiscProfile(), 96);

// Flat D-ring bail strap:
//   hu = 1.3mm → total strap width 2.6mm (wide face, visible from front)
//   hv = 0.75mm → total strap thickness 1.5mm (thin edge, visible from side)
//   corner radius 0.2mm (stays flat, not circular)
const bailSection = flatStrapSection(1.0, 0.7, 0.18, 4);
const bailMesh    = buildTubeMesh(buildBailPath(80), bailSection);

// ─── GLB packing ─────────────────────────────────────────────────────────────

function meshToBuffers(mesh) {
  return {
    pos: new Float32Array(mesh.positions),
    nor: new Float32Array(mesh.normals),
    idx: new Uint32Array(mesh.indices),
  };
}

function computeBounds(arr) {
  let mnX=Infinity,mnY=Infinity,mnZ=Infinity,mxX=-Infinity,mxY=-Infinity,mxZ=-Infinity;
  for (let i = 0; i < arr.length; i += 3) {
    mnX=Math.min(mnX,arr[i]);   mxX=Math.max(mxX,arr[i]);
    mnY=Math.min(mnY,arr[i+1]); mxY=Math.max(mxY,arr[i+1]);
    mnZ=Math.min(mnZ,arr[i+2]); mxZ=Math.max(mxZ,arr[i+2]);
  }
  return { min: [mnX, mnY, mnZ], max: [mxX, mxY, mxZ] };
}

const pad4 = n => Math.ceil(n / 4) * 4;

function buildGLB(meshes) {
  const bufferViews = [], accessors = [], gltfMeshes = [], nodes = [], chunks = [];
  let byteOffset = 0;

  const addView = (data, target) => {
    bufferViews.push({ buffer: 0, byteOffset, byteLength: data.byteLength, target });
    chunks.push(Buffer.from(data.buffer, data.byteOffset, data.byteLength));
    byteOffset += data.byteLength;
    return bufferViews.length - 1;
  };
  const addAcc = (v, ct, count, type, mm) => {
    const a = { bufferView: v, componentType: ct, count, type };
    if (mm) { a.min = mm.min; a.max = mm.max; }
    accessors.push(a);
    return accessors.length - 1;
  };

  meshes.forEach((m, mi) => {
    const name = ['Disc', 'Bail'][mi] ?? `Mesh${mi}`;
    const posAcc = addAcc(addView(m.pos, 34962), 5126, m.pos.length/3, 'VEC3', computeBounds(m.pos));
    const norAcc = addAcc(addView(m.nor, 34962), 5126, m.nor.length/3, 'VEC3', null);
    const idxAcc = addAcc(addView(m.idx, 34963), 5125, m.idx.length, 'SCALAR', null);
    gltfMeshes.push({ name, primitives: [{ attributes: { POSITION: posAcc, NORMAL: norAcc }, indices: idxAcc, material: 0, mode: 4 }] });
    nodes.push({ mesh: mi, name });
  });

  const json = {
    asset: { version: '2.0', generator: 'bagmonitor-tag-gen-v2' },
    scene: 0,
    scenes: [{ nodes: nodes.map((_, i) => i) }],
    nodes,
    meshes: gltfMeshes,
    materials: [{
      name: 'WhitePlastic',
      pbrMetallicRoughness: {
        baseColorFactor: [0.94, 0.94, 0.95, 1.0],
        metallicFactor: 0.0,
        roughnessFactor: 0.45,
      },
      doubleSided: true,
    }],
    accessors, bufferViews,
    buffers: [{ byteLength: byteOffset }],
  };

  const jsonBuf = Buffer.from(JSON.stringify(json), 'utf8');
  const jsonPadded = pad4(jsonBuf.length);
  const binData = Buffer.concat(chunks);
  const binPadded = pad4(binData.length);
  const totalLen = 12 + 8 + jsonPadded + 8 + binPadded;
  const out = Buffer.alloc(totalLen);

  let o = 0;
  out.writeUInt32LE(0x46546C67, o); o += 4; // magic 'glTF'
  out.writeUInt32LE(2, o); o += 4;           // version
  out.writeUInt32LE(totalLen, o); o += 4;
  out.writeUInt32LE(jsonPadded, o); o += 4;
  out.writeUInt32LE(0x4E4F534A, o); o += 4; // JSON
  jsonBuf.copy(out, o); o += jsonBuf.length;
  out.fill(0x20, o, o + (jsonPadded - jsonBuf.length)); o += jsonPadded - jsonBuf.length;
  out.writeUInt32LE(binPadded, o); o += 4;
  out.writeUInt32LE(0x004E4942, o); o += 4; // BIN
  binData.copy(out, o); o += binData.length;
  out.fill(0x00, o, o + (binPadded - binData.length));
  return out;
}

// ─── Run ─────────────────────────────────────────────────────────────────────

const disc = meshToBuffers(discMesh);
const bail = meshToBuffers(bailMesh);
const glb  = buildGLB([disc, bail]);
const out  = join(__dirname, 'bagmonitor-tag.glb');
writeFileSync(out, glb);

console.log(`✓ ${glb.length} bytes → ${out}`);
console.log(`  Disc: ${disc.idx.length/3} tri, ${disc.pos.length/3} verts`);
console.log(`  Bail: ${bail.idx.length/3} tri, ${bail.pos.length/3} verts`);
