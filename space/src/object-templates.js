import * as THREE from 'three';

// The reference segment, never a decorative halo's bounding box, represents q.
const TAU = Math.PI * 2;
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const standard = (color, extra = {}) => new THREE.MeshStandardMaterial({color, roughness: .43, metalness: .12, ...extra});
const basic = (color, opacity = 1) => new THREE.MeshBasicMaterial({color, transparent: opacity < 1, opacity, depthWrite: opacity === 1});
const mesh = (geometry, material, parent, position) => {
  const m = new THREE.Mesh(geometry, material);
  if (position) m.position.copy(position);
  if (parent) parent.add(m);
  return m;
};
function instances(parent, geometry, material, transforms) {
  const batch = new THREE.InstancedMesh(geometry, material, transforms.length), dummy = new THREE.Object3D();
  transforms.forEach((t, i) => {
    dummy.position.copy(t.position); dummy.scale.set(...(t.scale || [1, 1, 1])); dummy.quaternion.copy(t.quaternion || new THREE.Quaternion()); dummy.updateMatrix(); batch.setMatrixAt(i, dummy.matrix);
    if (t.color) batch.setColorAt(i, new THREE.Color(t.color));
  });
  batch.instanceMatrix.needsUpdate = true; batch.computeBoundingBox(); batch.computeBoundingSphere(); parent.add(batch); return batch;
}
function rodInstances(parent, material, segments, radius) {
  const transforms = segments.map(([a, b]) => ({position: a.clone().add(b).multiplyScalar(.5), scale: [1, a.distanceTo(b), 1], quaternion: new THREE.Quaternion().setFromUnitVectors(V(0, 1), b.clone().sub(a).normalize())}));
  return instances(parent, new THREE.CylinderGeometry(radius, radius, 1, 8), material, transforms);
}
function ellipsoid(parent, position, scale, material, detail = 32) {
  const m = mesh(new THREE.SphereGeometry(1, detail, Math.max(16, detail / 2)), material, parent, position);
  m.scale.set(...scale); return m;
}
function rod(parent, a, b, radius, material, radiusB = radius) {
  const direction = b.clone().sub(a), length = direction.length();
  if (!(length > 0)) return null;
  const m = mesh(new THREE.CylinderGeometry(radiusB, radius, length, 10), material, parent, a.clone().add(b).multiplyScalar(.5));
  m.quaternion.setFromUnitVectors(V(0, 1), direction.normalize()); return m;
}
function line(parent, points, color = '#769fac', opacity = .65, dashed = false) {
  const material = dashed ? new THREE.LineDashedMaterial({color, transparent: true, opacity, dashSize: .045, gapSize: .035}) : new THREE.LineBasicMaterial({color, transparent: true, opacity});
  const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material);
  if (dashed) l.computeLineDistances(); parent.add(l); return l;
}
function curve(parent, points, radius, material, closed = false) {
  return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points, closed), Math.max(40, points.length * 8), radius, 7, closed), material, parent);
}
function ring(parent, radius, tube, material, position = V(), rotation = V(Math.PI / 2)) {
  const m = mesh(new THREE.TorusGeometry(radius, tube, 6, 80), material, parent, position);
  m.rotation.set(rotation.x, rotation.y, rotation.z); return m;
}
function rng(key) {
  let seed = [...key].reduce((a, c) => Math.imul(a ^ c.charCodeAt(0), 16777619), 2166136261) >>> 0;
  return () => {seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296;};
}
function fit(group, axis = 'x', length = 2) {
  group.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(group, true), extent = box.getSize(V())[axis];
  if (!(extent > 0) || !Number.isFinite(extent)) throw new Error('Empty spatial template');
  group.position.sub(box.getCenter(V())); group.scale.setScalar(length / extent);
  // Position must be scaled too: local geometry is centered before scaling.
  group.position.multiplyScalar(length / extent);
  return group;
}
function reference(group, axis, kind, offset = 0) {
  const a = V(), b = V(); a[axis] = -1; b[axis] = 1;
  if (axis === 'x') {a.y = b.y = offset; a.z = b.z = .19;}
  if (axis === 'y') {a.x = b.x = offset; a.z = b.z = .19;}
  const guide = new THREE.Group(); guide.name = 'comparison-reference';
  guide.userData.decorative = true;
  line(guide, [a, b], '#bddce2', .62, true);
  const cross = axis === 'x' ? V(0, .055) : V(.055);
  for (const endpoint of [a, b]) line(guide, [endpoint.clone().sub(cross), endpoint.clone().add(cross)], '#e3f5f6', .9);
  group.add(guide);
  group.userData.reference = {axis, kind, length: 2, start: a.toArray(), end: b.toArray()};
}
function halo(parent, radius, color, opacity = .12, position = V()) {
  const m = mesh(new THREE.SphereGeometry(radius, 36, 24), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending,
    uniforms: {tint: {value: new THREE.Color(color)}, alpha: {value: opacity}},
    vertexShader: 'varying vec3 n;varying vec3 p;void main(){n=normalize(mat3(modelMatrix)*normal);p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}',
    fragmentShader: 'uniform vec3 tint;uniform float alpha;varying vec3 n;varying vec3 p;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(cameraPosition-p))),2.3);gl_FragColor=vec4(tint,r*alpha);}'
  }), parent, position);
  m.userData.decorative = true; return m;
}
function points(parent, positions, colors, size = 3.2, opacity = .85) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const material = new THREE.ShaderMaterial({transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {pointSize: {value: size}, alpha: {value: opacity}},
    vertexShader: 'attribute vec3 color;varying vec3 tint;uniform float pointSize;void main(){tint=color;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(pointSize*14./max(2.,-p.z),1.,18.);}',
    fragmentShader: 'varying vec3 tint;uniform float alpha;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(tint,alpha*pow(1.-r,1.7));}'
  });
  const result = new THREE.Points(geometry, material); parent.add(result); return result;
}
function pointCloud(parent, count, random, color, sample, size = 3) {
  const positions = [], colors = [], base = new THREE.Color(color);
  for (let i = 0; i < count; i++) {
    const p = sample(i); positions.push(p.x, p.y, p.z);
    const c = base.clone().lerp(new THREE.Color('#fff0db'), random() * .55).multiplyScalar(.55 + random() * .6);
    colors.push(c.r, c.g, c.b);
  }
  return points(parent, positions, colors, size);
}

function architecture(g, c) {
  const stone = standard(c.color, {roughness: .7}), metal = standard('#99b4c0', {metalness: .76, roughness: .25});
  if (c.variant === 'bridge') {
    const orange = standard('#b55438', {roughness: .43, metalness: .45});
    mesh(new THREE.BoxGeometry(2, .035, .15), metal, g, V(0, -.19));
    const towerX = (c.parameters?.mainSpanM ?? 1280) / (c.parameters?.totalLengthM ?? 2737);
    for (const x of [-towerX, towerX]) {
      for (const z of [-.085, .085]) mesh(new THREE.BoxGeometry(.035, .57, .032), orange, g, V(x, .075, z));
      for (const y of [-.08, .08, .24]) rod(g, V(x, y, -.09), V(x, y, .09), .016, orange);
    }
    for (const z of [-.09, .09]) {
      const cable = [];
      for (let i = 0; i <= 64; i++) {
        const x = -1 + i / 32, y = Math.abs(x) < towerX ? -.08 + .42 * (x / towerX) ** 2 : .34 - .52 * (Math.abs(x) - towerX) / (1 - towerX);
        cable.push(V(x, y, z));
        if (i % 2 === 0) rod(g, V(x, -.17, z), V(x, y, z), .003, metal);
      }
      curve(g, cable, .008, orange);
    }
    reference(g, 'x', 'abutment-to-abutment', -.31);
  } else if (c.variant === 'pyramid') {
    mesh(new THREE.ConeGeometry(2.2, 2, 4, 1).rotateY(Math.PI / 4), stone, g);
    for (let y = -.94; y < 1; y += .085) {
      const side = (1 - y) / 2 * 3.1;
      const square = [V(-side / 2, y, -side / 2), V(side / 2, y, -side / 2), V(side / 2, y, side / 2), V(-side / 2, y, side / 2), V(-side / 2, y, -side / 2)];
      line(g, square, '#806b52', .34);
    }
    reference(g, 'y', 'original-height', 1.72);
  } else {
    const building = new THREE.Group();
    for (let i = 0; i < 15; i++) {
      const h = .115, width = .29 * (1 - i / 19), y = -.96 + i * .118;
      mesh(new THREE.CylinderGeometry(width * .83, width, h, 3), i % 3 ? metal : stone, building, V(0, y));
      for (let j = 0; j < 3; j++) {
        const angle = j / 3 * TAU;
        line(building, [V(Math.cos(angle) * width, y - h / 2, Math.sin(angle) * width), V(Math.cos(angle) * width * .83, y + h / 2, Math.sin(angle) * width * .83)], '#c0edf4', .6);
      }
    }
    rod(building, V(0, .65), V(0, 1.06), .014, metal, .002);
    fit(building, 'y'); g.add(building); reference(g, 'y', 'architectural-height', .44);
  }
}
function terrain(g, c) {
  if (c.variant === 'island') {
    const outline = new THREE.Shape(); outline.moveTo(0, 1);
    outline.bezierCurveTo(.4, .6, .43, -.45, -.17, -1);
    outline.bezierCurveTo(-.35, -.45, -.4, .5, 0, 1);
    const island = mesh(new THREE.ExtrudeGeometry(outline, {depth: .1, bevelEnabled: true, bevelSize: .018, bevelThickness: .025, bevelSegments: 2, steps: 1}), standard(c.color, {roughness: .9}), g);
    const body = new THREE.Group(); g.remove(island); body.add(island); fit(body, 'y'); g.add(body);
    reference(g, 'y', 'north-south-overview', .64); return;
  }
  const vertical = c.variant === 'elevation', segments = 50, geo = new THREE.PlaneGeometry(vertical ? 2.8 : 2, vertical ? 1.2 : 1.1, segments, segments);
  geo.rotateX(-Math.PI / 2);
  const p = geo.attributes.position, colors = [];
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i), r = Math.min(1, Math.hypot(x / (vertical ? 1.4 : 1), z / .6));
    const ridge = Math.max(0, 1 - r) ** (vertical ? 1.05 : 1.7), noise = Math.sin(x * 29) * Math.cos(z * 32) * .025 * (1 - r);
    const y = vertical ? -.72 + ridge * 1.72 + noise : -.4 + ridge * .58 + noise;
    p.setY(i, y);
    const color = new THREE.Color(y > .64 && vertical ? '#e9f4f5' : y > .1 ? '#928c82' : c.color);
    color.multiplyScalar(.8 + .2 * Math.cos(x * 16 + z * 8)); colors.push(color.r, color.g, color.b);
  }
  // Keep the elevation's summit and datum exact, independent of terrain noise.
  if (vertical) {let top = -Infinity; for (let i = 0; i < p.count; i++) top = Math.max(top, p.getY(i)); for (let i = 0; i < p.count; i++) p.setY(i, -.72 + (p.getY(i) + .72) * 1.72 / (top + .72));}
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3)); geo.computeVertexNormals();
  mesh(geo, standard('#ffffff', {vertexColors: true, roughness: .96, side: THREE.DoubleSide}), g);
  if (vertical) {line(g, [V(-1.55, -1), V(1.55, -1)], '#7ab8d4', .8, true); reference(g, 'y', 'summit-elevation-above-datum', 1.52);}
  else reference(g, 'x', 'base-span', -.48);
}
function field(g, c) {
  const turf = standard(c.color, {roughness: 1});
  mesh(new THREE.BoxGeometry(2, .025, 2 * 68 / 105), turf, g);
  for (let i = 0; i < 10; i++) mesh(new THREE.PlaneGeometry(.2, 2 * 68 / 105), basic(i % 2 ? '#357964' : '#276657', .35), g, V(-.9 + i * .2, .014)).rotation.x = -Math.PI / 2;
  const y = .02, width = 68 / 105;
  line(g, [V(-1, y, -width), V(1, y, -width), V(1, y, width), V(-1, y, width), V(-1, y, -width)], '#e6f2db', .9);
  line(g, [V(0, y, -width), V(0, y, width)], '#e6f2db', .9);
  ring(g, 9.15 / 105 * 2, .006, basic('#e6f2db'), V(0, y));
  for (const s of [-1, 1]) {
    line(g, [V(s, y, -.38), V(s * .69, y, -.38), V(s * .69, y, .38), V(s, y, .38)], '#e6f2db', .9);
    for (const z of [-.075, .075]) rod(g, V(s, y, z), V(s, y + .07, z), .006, standard('#dbe5e2'));
    rod(g, V(s, y + .07, -.075), V(s, y + .07, .075), .006, standard('#dbe5e2'));
  }
  reference(g, 'x', 'touchline-length', -.16);
}
function coin(g, c) {
  const metal = standard(c.color, {metalness: .85, roughness: .3});
  const disk = mesh(new THREE.CylinderGeometry(1, 1, .085, 96), metal, g); disk.rotation.x = Math.PI / 2;
  for (const z of [-.048, .048]) {
    ring(g, .91, .012, metal, V(0, 0, z), V());
    ring(g, .97, .009, metal, V(0, 0, z), V());
  }
  for (let i = 0; i < 80; i++) {const a = i / 80 * TAU; rod(g, V(Math.cos(a), Math.sin(a), -.035), V(Math.cos(a), Math.sin(a), .035), .004, metal);}
  mesh(new THREE.BoxGeometry(.075, .67, .025), metal, g, V(.07, 0, .056));
  reference(g, 'x', 'coin-diameter', -1.13);
}
function pencil(g, c) {
  const body = mesh(new THREE.CylinderGeometry(.043, .043, 1.72, 6), standard(c.color), g, V(-.09)); body.rotation.z = -Math.PI / 2;
  const wood = mesh(new THREE.ConeGeometry(.043, .22, 6), standard('#cba778', {roughness: .86}), g, V(.88)); wood.rotation.z = -Math.PI / 2;
  const tip = mesh(new THREE.ConeGeometry(.012, .055, 10), standard('#343c43'), g, V(.9925)); tip.rotation.z = -Math.PI / 2;
  const b = new THREE.Group(); while (g.children.length) b.add(g.children[0]); fit(b, 'x'); g.add(b);
  for (const y of [-.018, .018]) line(g, [V(-.82, y, .038), V(.69, y, .038)], '#ead3aa', .55);
  reference(g, 'x', 'pencil-total-length', -.17);
}
function grain(g, c) {
  const body = ellipsoid(g, V(), [1, .28, .25], standard(c.color, {roughness: .83}));
  const p = body.geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {const x = p.getX(i); p.setZ(i, p.getZ(i) * (1 - .13 * x));} body.geometry.computeVertexNormals();
  curve(g, [V(-.91, -.07, .105), V(-.5, -.08, .24), V(.1, -.065, .253), V(.75, -.035, .17), V(.95, 0, .06)], .009, standard('#aa997a'));
  reference(g, 'x', 'rice-kernel-length', -.4);
}
function hand(g, c) {
  const body = new THREE.Group(), skin = standard(c.color, {roughness: .68});
  ellipsoid(body, V(0, -.28), [.37, .55, .12], skin);
  ellipsoid(body, V(0, -.77), [.24, .24, .1], skin);
  for (const [x, top, width] of [[-.27, .64, .08], [-.09, .98, .088], [.095, .89, .083], [.26, .62, .07]]) {
    const y0 = .02, mid = (y0 + top) / 2;
    rod(body, V(x, y0), V(x, top - width), width, skin, width * .81);
    ellipsoid(body, V(x, top - width), [width * .81, width, width * .75], skin);
    mesh(new THREE.CapsuleGeometry(width * .5, .055, 4, 10), standard('#d5bcb1', {roughness: .45}), body, V(x, top - .11, .067));
    line(body, [V(x - width * .6, mid, .08), V(x + width * .6, mid, .08)], '#887466', .35);
  }
  rod(body, V(-.23, -.38), V(-.57, .01), .105, skin, .085);
  ellipsoid(body, V(-.57, .01), [.085, .105, .08], skin);
  fit(body, 'y'); g.add(body); reference(g, 'y', 'whole-hand-length', .61);
}
function arthropod(g, c, random) {
  const body = new THREE.Group(), shell = standard(c.color, {roughness: .35, metalness: .23});
  if (c.variant === 'mite') {
    ellipsoid(body, V(), [1, .63, .48], shell);
    for (let i = 0; i < 4; i++) for (const s of [-1, 1]) {
      const x = -.6 + i * .4; curve(g, [V(x, .2 * s), V(x - .25, .8 * s, .12), V(x - .4, 1.1 * s, -.15)], .022, shell);
    }
    for (let i = 0; i < 24; i++) {const x = (random() - .5) * 1.7, a = random() * TAU; rod(body, V(x, Math.cos(a) * .5, Math.sin(a) * .37), V(x + .03, Math.cos(a) * .62, Math.sin(a) * .49), .003, shell);}
  } else {
    ellipsoid(body, V(-.72), [.27, .22, .21], shell); ellipsoid(body, V(-.23), [.27, .19, .19], shell);
    ellipsoid(body, V(.5), [.5, c.variant === 'mosquito' ? .13 : .3, .24], shell);
    for (const s of [-1, 1]) {
      for (let i = 0; i < 3; i++) {const x = -.38 + i * .23; curve(g, [V(x, s * .1), V(x + .15, s * .55, .04), V(x + (i - 1) * .4, s * .85, -.12)], .018, shell);}
      curve(g, [V(-.88, s * .12), V(-1.08, s * .33, .1), V(-1.32, s * .46, .12)], .012, shell);
      ellipsoid(body, V(-.87, s * .13, .13), [.065, .05, .05], standard('#111e29', {roughness: .12}));
      if (c.variant === 'mosquito') {
        const wing = ellipsoid(g, V(.03, s * .49, .1), [.63, .3, .009], standard('#a5d4df', {transparent: true, opacity: .22, depthWrite: false, side: THREE.DoubleSide, roughness: .25}));
        wing.rotation.z = s * .3;
        for (let j = 0; j < 5; j++) line(wing, [V(-.8, 0), V(.55, -.65 + j * .3)], '#bed9df', .35);
      }
    }
    if (c.variant === 'mosquito') rod(g, V(-.94), V(-1.56, -.04), .009, shell);
  }
  // Body, excluding legs/antennae/wings, owns the comparison axis.
  fit(body, 'x'); g.add(body); reference(g, 'x', 'body-length-excluding-appendages', -1.16);
}
function whale(g, c) {
  const body = new THREE.Group(), skin = standard(c.color, {roughness: .52, metalness: .18});
  const main = ellipsoid(body, V(-.15), [.82, .22, .25], skin, 48);
  rod(body, V(.32), V(.88, -.01), .15, skin, .028);
  for (const s of [-1, 1]) {
    const fluke = ellipsoid(body, V(.87, 0, s * .18), [.18, .035, .24], skin); fluke.rotation.y = s * .32;
    const fin = ellipsoid(body, V(-.28, -.08, s * .31), [.24, .035, .085], skin); fin.rotation.y = s * .3;
    ellipsoid(body, V(-.77, .035, s * .17), [.025, .018, .015], standard('#102b38'));
  }
  for (let i = 0; i < 8; i++) curve(body, [V(-.87, -.08, -.15 + i * .04), V(-.55, -.215, -.15 + i * .04), V(-.1, -.18, -.11 + i * .03)], .003, standard('#a6b7b6'));
  main.name = 'whale-body'; fit(body, 'x'); g.add(body); reference(g, 'x', 'total-body-length', -.43);
}
function microbe(g, c, random) {
  if (c.variant === 'rbc') {
    const geo = new THREE.SphereGeometry(1, 80, 56), p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {const x = p.getX(i), y = p.getY(i), rr = Math.min(1, x * x + y * y); p.setZ(i, Math.sign(p.getZ(i)) * .38 * Math.sqrt(1 - rr) * (.207 + 2.003 * rr - 1.123 * rr * rr));}
    geo.computeVertexNormals(); mesh(geo, standard(c.color, {roughness: .38, metalness: .06}), g);
    reference(g, 'x', 'disc-face-diameter', -1.14); return;
  }
  const body = new THREE.Group();
  if (c.variant === 'virus') {
    mesh(new THREE.IcosahedronGeometry(.88, 3), standard(c.color, {roughness: .5}), body);
    const stems = [], heads = [];
    for (let i = 0; i < 68; i++) {const y = 1 - (i + .5) * 2 / 68, a = i * 2.399963, r = Math.sqrt(1 - y * y), n = V(Math.cos(a) * r, y, Math.sin(a) * r); stems.push([n.clone().multiplyScalar(.85), n.clone().multiplyScalar(.97)]); heads.push({position: n.clone().multiplyScalar(.99)});}
    rodInstances(body, standard('#82b8b7'), stems, .014); instances(body, new THREE.SphereGeometry(.035, 12, 8), standard('#bf9ea6'), heads);
  } else {
    ellipsoid(body, V(), [1, .68, .68], standard(c.color, {transparent: true, opacity: .66, roughness: .3, depthWrite: false}));
    curve(body, Array.from({length: 45}, (_, i) => {const a = i / 44 * TAU * 3; return V((i / 44 - .5) * 1.2, Math.sin(a) * .25, Math.cos(a) * .25);}), .018, standard('#ccb789'));
    for (let i = 0; i < 22; i++) ellipsoid(body, V((random() - .5) * 1.35, (random() - .5) * .7, (random() - .5) * .7), [.035, .035, .035], standard('#aacac1'), 10);
  }
  fit(body, 'x'); g.add(body); reference(g, 'x', 'selected-overview-length', -1.15);
}
function organelle(g, c, random) {
  const body = new THREE.Group(), translucent = standard(c.color, {transparent: true, opacity: .24, side: THREE.DoubleSide, depthWrite: false, roughness: .25});
  if (c.variant === 'pollen') {
    mesh(new THREE.SphereGeometry(.96, 64, 40), standard(c.color, {roughness: .82}), body);
    const ornaments = [];
    for (let i = 0; i < 190; i++) {const y = 1 - 2 * (i + .5) / 190, a = i * 2.399963, n = V(Math.cos(a) * Math.sqrt(1 - y * y), y, Math.sin(a) * Math.sqrt(1 - y * y)); ornaments.push({position: n.multiplyScalar(.96)});}
    instances(body, new THREE.IcosahedronGeometry(.025, 1), standard('#c4ae71'), ornaments);
    ring(body, .19, .025, standard('#a18a50'), V(.12, .1, .94), V());
    ellipsoid(body, V(.12, .1, .941), [.16, .16, .016], standard('#b69a5d'));
  } else if (c.variant === 'ribosome') {
    ellipsoid(body, V(.05, -.22), [.95, .62, .58], standard(c.color));
    ellipsoid(body, V(-.11, .47), [.73, .35, .5], standard('#b4c5ad'));
    const beads = [];
    for (let i = 0; i < 100; i++) {const a = random() * TAU, y = (random() - .5) * 1.2, rr = Math.sqrt(Math.max(0, 1 - y * y)); beads.push({position: V(Math.cos(a) * rr * .84, y, Math.sin(a) * rr * .52), color: i % 3 ? c.color : '#d1b78e'});}
    instances(body, new THREE.IcosahedronGeometry(.06, 1), standard('#ffffff'), beads);
    curve(body, [V(-1.1, .17, .3), V(-.3, .12, .43), V(.4, .17, .48), V(1.1, .3, .3)], .026, standard('#e2b87d'));
  } else {
    ellipsoid(body, V(), [1, .47, .42], translucent);
    const outline = ring(body, 1, .012, standard(c.color), V(), V()); outline.scale.y = .47;
    if (c.variant === 'chloroplast') {
      for (const x of [-.65, -.23, .23, .65]) for (let j = 0; j < 5; j++) {
        const disk = mesh(new THREE.CylinderGeometry(.17, .17, .025, 24), standard('#649b7a'), body, V(x, -.12 + j * .06));
        ring(body, .17, .009, standard('#91b58e'), disk.position);
      }
      for (const y of [-.07, .1]) curve(body, [V(-.75, y), V(-.4, y + .07), V(.3, y - .05), V(.75, y)], .015, standard('#8cb68a'));
    } else {
      for (let i = 0; i < 9; i++) {const x = -.77 + i * .19; curve(body, [V(x, -.25, -.14), V(x + .07, .2, -.1), V(x, .26, .12), V(x + .08, -.25, .15)], .026, standard('#b69a91'));}
    }
  }
  fit(body, 'x'); g.add(body); reference(g, 'x', c.variant === 'pollen' ? 'hydrated-pollen-diameter' : 'specified-overview-length', -.83);
}
function membrane(g, c, random) {
  const gap = c.variant === 'synapse', lipid = standard(c.color, {roughness: .38}), tail = standard('#839f9e');
  // Head outer surfaces bound thickness; head inner surfaces bound the cleft.
  const surfaces = gap ? [-1.055, 1.055] : [-.945, .945];
  const heads = [], tails = [];
  for (const y of surfaces) {
    mesh(new THREE.BoxGeometry(1.9, gap ? .08 : .035, .95), standard(c.color, {transparent: true, opacity: .15, depthWrite: false}), g, V(0, y + (gap ? Math.sign(y) * .04 : 0)));
    for (let i = 0; i < 12; i++) for (let j = 0; j < 6; j++) {
      const x = -.86 + i * .156, z = -.4 + j * .16;
      heads.push({position: V(x, y, z)});
      if (!gap) for (const dx of [-.016, .016]) tails.push([V(x + dx, y - Math.sign(y) * .055, z), V(x + dx, Math.sign(y) * .05, z + .012)]);
    }
  }
  instances(g, new THREE.SphereGeometry(.055, 10, 8), lipid, heads);
  if (tails.length) rodInstances(g, tail, tails, .012);
  if (gap) {
    const transmitters = [];
    for (let i = 0; i < 14; i++) transmitters.push(ellipsoid(g, V((random() - .5) * 1.4, (random() - .5) * 1.45, (random() - .5) * .6), [.035, .035, .035], standard('#e7bf7f'), 10));
    g.userData.update = (_d, time) => {transmitters.forEach((p, i) => {p.position.y = -.725 + ((i / 14 + time * .08) % 1) * 1.45;});};
  }
  reference(g, 'y', gap ? 'intermembrane-gap' : 'membrane-thickness', 1.19);
}
function motor(g, c) {
  const rail = standard('#7a9caa'), foot = standard(c.color), walking = new THREE.Group();
  for (const z of [-.09, .09]) rod(g, V(-1.25, -.32, z), V(1.25, -.32, z), .038, rail);
  for (let i = 0; i < 17; i++) rod(g, V(-1.2 + i * .15, -.32, -.09), V(-1.2 + i * .15, -.32, .09), .018, rail);
  for (const s of [-1, 1]) {ellipsoid(walking, V(s * .11, -.19), [.1, .075, .08], foot); curve(walking, [V(s * .11, -.13), V(s * .17, .12), V(0, .34)], .027, foot);}
  ellipsoid(walking, V(0, .47), [.16, .14, .13], standard('#c3b38a')); g.add(walking);
  reference(g, 'x', 'kinesin-step-displacement', -.58);
  g.userData.update = (_delta, time) => {walking.position.x = -1 + ((time * .22) % 1) * 2; walking.rotation.z = Math.sin(time * 3) * .03;};
}
function molecule(g, c) {
  const body = new THREE.Group(), material = standard(c.color, {roughness: .34, metalness: .2});
  if (c.variant === 'water') {
    const hydrogen = standard('#e2e6e1'), oxygen = standard('#bb6e65'), hh = c.parameters?.hydrogenDistanceAngstrom ?? 1.5144, oh = c.parameters?.oxygenHydrogenDistanceAngstrom ?? .9578, height = Math.sqrt((2 * oh / hh) ** 2 - 1);
    ellipsoid(body, V(0, height - .3), [.27, .27, .27], oxygen);
    for (const x of [-1, 1]) {ellipsoid(body, V(x, -.3), [.16, .16, .16], hydrogen); rod(body, V(0, height - .3), V(x, -.3), .055, material);}
    g.add(body); reference(g, 'x', 'hydrogen-nucleus-separation', -.3); return;
  }
  if (c.variant === 'fullerene') {
    const ico = new THREE.IcosahedronGeometry(1, 0), unique = [];
    for (let i = 0; i < ico.attributes.position.count; i++) {const p = V().fromBufferAttribute(ico.attributes.position, i); if (!unique.some(q => q.distanceTo(p) < 1e-5)) unique.push(p);}
    let side = Infinity; for (let i = 0; i < unique.length; i++) for (let j = i + 1; j < unique.length; j++) side = Math.min(side, unique[i].distanceTo(unique[j]));
    const vertices = []; for (const a of unique) for (const b of unique) if (Math.abs(a.distanceTo(b) - side) < 1e-4) vertices.push(a.clone().multiplyScalar(2 / 3).add(b.clone().multiplyScalar(1 / 3)));
    let bond = Infinity; for (let i = 0; i < vertices.length; i++) for (let j = i + 1; j < vertices.length; j++) bond = Math.min(bond, vertices[i].distanceTo(vertices[j]));
    const bonds = [];
    for (let i = 0; i < vertices.length; i++) for (let j = i + 1; j < vertices.length; j++) if (vertices[i].distanceTo(vertices[j]) < bond * 1.02) bonds.push([vertices[i], vertices[j]]);
    instances(body, new THREE.SphereGeometry(.036, 10, 8), material, vertices.map(position => ({position})));
    rodInstances(body, material, bonds, .012);
    ico.dispose();
  } else if (c.variant === 'trna') {
    const path = [V(-.8, -.6), V(-.76, -.05, .04), V(-.72, .59), V(-.2, .63, .03), V(.8, .6)];
    for (const side of [-1, 1]) {const strand = path.map((p, i) => p.clone().add(V(Math.sin(i * 1.2) * .05, side * .065, side * .035))); curve(body, strand, .027, standard(side > 0 ? c.color : '#c3b388'));}
    for (let i = 0; i < 19; i++) {const t = i / 18, p = t < .5 ? V(-.78, -.6 + t * 2.4) : V(-.72 + (t - .5) * 3.04, .61); ellipsoid(body, p, [.046, .046, .046], material, 10);}
    g.add(body);
    const a = V(-.8, -.6, .15), b = V(.8, .6, .15); line(g, [a, b], '#c3dce3', .7, true);
    g.userData.reference = {axis: 'diagonal', kind: 'structure-maximum-span', length: 2, start: a.toArray(), end: b.toArray()}; return;
  } else {
    for (const [i, x, y] of [[0, -.43, -.32], [1, .4, -.32], [2, -.42, .34], [3, .4, .34]]) {
      ellipsoid(body, V(x, y), [.55, .43, .43], standard(i % 2 ? '#b69894' : c.color));
      const p = Array.from({length: 45}, (_, j) => {const t = j / 44; return V(x + (t - .5) * .75, y + Math.cos(t * TAU * 2) * .16, Math.sin(t * TAU * 2) * .16 + .39);});
      curve(body, p, .025, standard(i % 2 ? '#dec7a3' : '#9ec5c6'));
    }
  }
  fit(body, 'x'); g.add(body); reference(g, 'x', 'specified-molecule-width', -1.02);
}
function atom(g, c) {
  if (c.variant === 'positronium') {
    for (const x of [-1, 1]) {ellipsoid(g, V(x), [.065, .065, .065], standard(x < 0 ? '#90bad5' : '#d6a4a0')); halo(g, .25, x < 0 ? '#81bee6' : '#eeb6b2', .2, V(x));}
    curve(g, [V(-1), V(-.5, .32), V(.5, -.32), V(1)], .008, standard('#8caebd'));
    reference(g, 'x', 'relative-coordinate-bohr-length', -.25);
  } else {
    ellipsoid(g, V(), [.055, .055, .055], standard('#e0c395'));
    for (const r of [.68, .85, 1]) halo(g, r, c.color, .12);
    reference(g, 'x', 'twice-nonbonded-radius', -1.12);
  }
}
function nucleus(g, c, random) {
  // The distribution has no sharp edge; the two-unit segment is ONE rms radius.
  const center = V(-1), positions = [], colors = [], samples = [];
  for (let i = 0; i < 600; i++) {
    const u = Math.max(1e-7, random()), a = random() * TAU, y = random() * 2 - 1, r = Math.min(2.5, Math.sqrt(-2 * Math.log(u)) * .95), v = Math.sqrt(1 - y * y);
    samples.push(V(Math.cos(a) * v * r, y * r, Math.sin(a) * v * r));
    const color = new THREE.Color(i % 2 ? c.color : '#d1a791'); colors.push(color.r, color.g, color.b);
  }
  const centroid = samples.reduce((sum, p) => sum.add(p), V()).multiplyScalar(1 / samples.length);
  samples.forEach(p => p.sub(centroid));
  const rms = Math.sqrt(samples.reduce((sum, p) => sum + p.lengthSq(), 0) / samples.length);
  for (const p of samples) {p.multiplyScalar(2 / rms).add(center); positions.push(p.x, p.y, p.z);}
  points(g, positions, colors, 2.7, .55); ellipsoid(g, center, [.035, .035, .035], basic('#e2e9e8'));
  reference(g, 'x', 'rms-charge-radius-not-boundary', 0); halo(g, 1.5, c.color, .05, center);
  g.userData.chargeRmsReference = 2;
}
function wave(g, c) {
  const material = standard(c.color, {emissive: c.color, emissiveIntensity: .3}), reduced = c.variant === 'reduced', span = reduced ? 1 : TAU;
  const positions = [];
  for (let i = 0; i <= 96; i++) {const t = i / 96; positions.push(V(-1 + 2 * t, Math.sin(t * span) * .25, Math.cos(t * span) * .09));}
  const waveMesh = curve(g, positions, .015, material);
  for (const x of [-1, 1]) line(g, [V(x, -.37), V(x, .39)], c.color, .28, true);
  reference(g, 'x', reduced ? 'reduced-compton-one-radian' : c.variant === 'light' ? 'defined-vacuum-light-distance' : 'ordinary-compton-one-cycle', -.45);
  const pulse = ellipsoid(g, V(-1, 0, 0), [.035, .035, .035], basic('#ebffff'), 12);
  g.userData.phaseSpan = span;
  g.userData.update = (_d, time) => {const t = (time * .16) % 1; pulse.position.set(-1 + t * 2, Math.sin(t * span) * .25, Math.cos(t * span) * .09); waveMesh.material.emissiveIntensity = .25 + .08 * Math.sin(time);};
}
function sphereObject(g, c, random) {
  const luminous = c.variant === 'star' || c.variant === 'neutron';
  const geo = new THREE.SphereGeometry(1, 64, 48), p = geo.attributes.position, colors = [], base = new THREE.Color(c.color);
  for (let i = 0; i < p.count; i++) {const x = p.getX(i), y = p.getY(i), z = p.getZ(i), pattern = .78 + .22 * Math.sin(x * 15 + z * 8) * Math.sin(y * 22 - x * 4); const col = base.clone().multiplyScalar(pattern); colors.push(col.r, col.g, col.b);}
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  mesh(geo, luminous ? new THREE.MeshBasicMaterial({vertexColors: true}) : standard('#ffffff', {vertexColors: true, roughness: c.variant === 'ball' ? .85 : .64}), g);
  if (luminous) halo(g, 1.12, c.color, .22);
  if (c.variant === 'ball') ring(g, 1.001, .002, standard('#b7c3c6'), V(), V(.4, .3));
  reference(g, 'x', 'specified-object-diameter', -1.17);
  g.userData.update = (_d, time) => {g.children[0].rotation.y = time * .025;};
}
function mirror(g, c) {
  const body = mesh(new THREE.CylinderGeometry(1, 1, .08, 80), standard(c.color, {metalness: .98, roughness: .12}), g); body.rotation.x = Math.PI / 2;
  ring(g, 1, .023, standard('#7b96a6', {metalness: .8}), V(0, 0, .04), V());
  ellipsoid(g, V(0, 0, .19), [.12, .12, .04], standard('#263e4c'));
  for (let i = 0; i < 4; i++) {const a = i / 4 * TAU; rod(g, V(0, 0, .18), V(Math.cos(a) * .94, Math.sin(a) * .94, .05), .008, standard('#809da9'));}
  reference(g, 'x', 'primary-mirror-diameter', -1.16);
}
function filament(g, c) {
  const cylinder = mesh(new THREE.CylinderGeometry(1, 1, 3.1, 72, 8), standard(c.color, {roughness: .48}), g); cylinder.rotation.x = Math.PI / 2;
  for (let i = 0; i < 11; i++) ring(g, 1.002, .007, standard('#8c7360'), V(0, 0, -1.5 + i * .3), V());
  reference(g, 'x', 'hair-cross-section-width', -1.13);
}
function galaxy(g, c, random) {
  const dust = new THREE.Group(), positions = [], colors = [];
  for (let i = 0; i < 5600; i++) {
    const r = Math.sqrt(random()), a = i % 3 / 3 * TAU + r * 5 + (random() - .5) * (.2 + r * .5), z = (random() - .5) * .075 * (1 - r);
    positions.push(Math.cos(a) * r, Math.sin(a) * r * .6, z);
    const color = new THREE.Color().setHSL(.58 - (1 - r) ** 4 * .45, .3, .4 + random() * .35); colors.push(color.r, color.g, color.b);
  }
  const stars = points(dust, positions, colors, 3.1); halo(dust, .22, '#ffd5a1', .2); g.add(dust);
  reference(g, 'x', 'stellar-disc-overview-span', -.79);
  g.userData.update = (_d, time) => {stars.material.uniforms.alpha.value = .82 + Math.sin(time * .6) * .035;};
}
function cluster(g, c, random) {
  const field = new THREE.Group();
  pointCloud(field, c.variant === 'wall' ? 1800 : 2300, random, c.color, i => {
    if (c.variant === 'wall') {const x = random() * 2 - 1; return V(x, Math.sin(x * 3) * .17 + (random() - .5) * .11, (random() - .5) * .22);}
    const a = random() * TAU, y = random() * 2 - 1, r = c.variant === 'globular' ? random() ** 1.8 : Math.cbrt(random());
    return V(Math.cos(a) * Math.sqrt(1 - y * y) * r, y * r * (c.variant === 'supercluster' ? .47 : 1), Math.sin(a) * Math.sqrt(1 - y * y) * r * .7);
  }, c.variant === 'globular' ? 3.7 : 3.1);
  if (c.variant !== 'globular' && c.variant !== 'wall') for (let i = 0; i < 7; i++) {const x = (i / 6 - .5) * 1.8; ring(field, .035 + (i % 3) * .012, .004, basic('#d4c49e', .55), V(x, Math.sin(i * 2) * .35, .05), V(.3, .2, i));}
  g.add(field); reference(g, 'x', c.variant === 'wall' ? 'reported-structure-length' : 'reported-overview-span', -1.16);
  g.userData.update = (_d, time) => {field.rotation.y = Math.sin(time * .025) * .025;};
}
function nebula(g, c, random) {
  const cloud = new THREE.Group();
  pointCloud(cloud, 4200, random, c.color, i => {
    const x = random() * 2 - 1, a = random() * TAU;
    if (c.variant === 'pillars') {const column = i % 3, y = random() * 2 - 1, w = .12 * (1 - (y + 1) * .24); return V((column - 1) * .47 + Math.cos(a) * w, y * (1 - column * .12), Math.sin(a) * w);}
    const radius = Math.sqrt(Math.max(0, 1 - x * x)) * (c.variant === 'crab' ? .65 : .45), t = random() ** .4;
    return V(x, Math.cos(a) * radius * t, Math.sin(a) * radius * t * .6);
  }, 4.8);
  if (c.variant !== 'pillars') for (let i = 0; i < 16; i++) {const a = i / 16 * TAU; curve(cloud, [V(Math.cos(a) * .12, Math.sin(a) * .1), V(Math.cos(a + .15) * .55, Math.sin(a + .15) * .4, .08), V(Math.cos(a) * .96, Math.sin(a) * .52)], .003, standard('#bda1a1'));}
  g.add(cloud);
  reference(g, c.variant === 'pillars' ? 'y' : 'x', c.variant === 'pillars' ? 'tallest-pillar-span' : 'reported-emission-span', c.variant === 'pillars' ? .9 : -.9);
  g.userData.update = (_d, time) => {cloud.rotation.y = Math.sin(time * .035) * .035;};
}
function distance(g, c, random) {
  const radial = ['radius', 'orbit', 'belt', 'cloud', 'heliopause'].includes(c.variant);
  if (radial) {
    const eccentricity = c.parameters?.eccentricity ?? .2056;
    // One radius/semimajor axis is q: center=-1, selected outer point=+1.
    const center = V(-1); ellipsoid(g, center, [.045, .045, .045], basic('#f1d19a')); halo(g, .16, '#e7b775', .18, center);
    const orbit = new THREE.Group();
    if (c.variant === 'orbit') {const b = Math.sqrt(1 - eccentricity * eccentricity); const ps = Array.from({length: 161}, (_, i) => {const a = i / 160 * TAU; return V(-1 + 2 * Math.cos(a), 2 * b * Math.sin(a), -.05);}); line(orbit, ps, c.color, .5);}
    else {for (let i = 0; i < (c.variant === 'belt' ? 7 : 3); i++) ring(orbit, 2 - i * (c.variant === 'belt' ? .11 : .015), .003, basic(c.color, .22), center, V());}
    if (c.variant === 'cloud' || c.variant === 'heliopause') {
      const shell = halo(orbit, 2, c.color, .08, center); shell.scale.set(1, c.variant === 'heliopause' ? .66 : 1, 1);
      pointCloud(orbit, 650, random, c.color, () => {const a = random() * TAU, y = random() * 2 - 1, rr = 1.7 + random() * .3, v = Math.sqrt(1 - y * y); return V(-1 + Math.cos(a) * rr * v, y * rr, Math.sin(a) * rr * v);}, 1.8);
    }
    g.add(orbit); line(g, [V(-1, -.1, .16), V(1, -.1, .16)], '#e0d2aa', .9);
    reference(g, 'x', c.variant === 'orbit' ? 'orbital-semimajor-axis' : 'heliocentric-radial-distance', -.1);
    if (c.variant === 'orbit') {
      // Cross marks are an ellipse's geometric center, not the Sun/focus.
      line(g, [V(-1, -.08, .18), V(-1, .08, .18)], '#e0d2aa', .9);
      const focus = V(-1 - 2 * eccentricity); g.children[0].position.copy(focus); g.children[1].position.copy(focus);
      g.userData.orbit = {eccentricity, semimajorAxis: 2, center: [-1, 0, 0], focus: focus.toArray()};
    }
    return;
  }
  for (const [i, x] of [[0, -1], [1, 1]]) {
    const node = new THREE.Group();
    if (c.variant === 'galaxy') {ellipsoid(node, V(), [.13, .055, .025], standard(i ? '#a5b8cf' : '#d5c59f')); ring(node, .17, .003, basic(c.color, .4), V(), V());}
    else ellipsoid(node, V(), [i ? .055 : .085, i ? .055 : .085, i ? .055 : .085], standard(i ? c.color : '#8faec3'));
    node.position.x = x; g.add(node); halo(node, .15, c.color, .1);
  }
  reference(g, 'x', 'endpoint-center-distance', -.23);
  line(g, [V(-1), V(1)], c.color, .45, true);
  const signal = ellipsoid(g, V(-1), [.025, .025, .025], basic('#ddf6f7'), 10);
  g.userData.update = (_d, time) => {signal.position.x = -1 + ((time * .13) % 1) * 2;};
}

function device(g, c) {
  const shell = standard(c.color, {metalness: .45, roughness: .4}), dark = standard('#1d2b36', {roughness: .55}), glass = basic('#8fc3d8', .35), body = new THREE.Group();
  g.add(body);
  if (c.variant === 'card') {
    mesh(new THREE.BoxGeometry(2, .05, 1.26), shell, body);
    mesh(new THREE.BoxGeometry(.22, .012, .18), standard('#d8bf83', {metalness: .9, roughness: .28}), body, V(-.62, .033, .12));
    for (const z of [-.38, -.30]) mesh(new THREE.BoxGeometry(1.9, .008, .07), dark, body, V(0, .032, z));
    for (const x of [-.3, -.05, .2]) mesh(new THREE.BoxGeometry(.24, .006, .3), basic('#a9c7d4', .5), body, V(x, .034, -.18));
    reference(g, 'x', 'card-long-edge', -.78);
  } else if (c.variant === 'phone') {
    mesh(new THREE.BoxGeometry(2, .08, .96), shell, body);
    mesh(new THREE.PlaneGeometry(1.78, .76), glass, body, V(0, .045, 0)).rotation.x = -Math.PI / 2;
    mesh(new THREE.BoxGeometry(.09, .012, .09), dark, body, V(-.86, .046, .28));
    mesh(new THREE.BoxGeometry(.06, .01, .04), basic('#e9f4f7', .8), body, V(-.86, .047, .28));
    reference(g, 'x', 'phone-screen-length', -.74);
  } else {
    mesh(new THREE.BoxGeometry(2, .07, 1.34), shell, body);
    mesh(new THREE.BoxGeometry(1.86, .012, 1.2), dark, body, V(0, .041, 0));
    for (let row = 0; row < 4; row++) for (let col = 0; col < 12; col++) mesh(new THREE.BoxGeometry(.12, .012, .12), basic('#93a9b6', .8), body, V(-.8 + col * .145, .049, -.32 + row * .13));
    mesh(new THREE.BoxGeometry(.72, .012, .34), basic('#8fa6b3', .7), body, V(0, .049, .52));
    const screen = mesh(new THREE.BoxGeometry(1.94, .03, 1.08), shell, body, V(0, .07, -.72)); screen.rotation.x = -1.05;
    const face = mesh(new THREE.BoxGeometry(1.8, .005, .94), glass, body, V(0, .085, -.74)); face.rotation.x = -1.05;
    reference(g, 'x', 'display-diagonal-span', -.78);
  }
}
function vehicle(g, c) {
  const hull = standard(c.color, {roughness: .55, metalness: .3}), deck = standard('#7b8d99', {roughness: .7}), body = new THREE.Group();
  g.add(body);
  if (c.variant === 'aircraft') {
    const fuse = mesh(new THREE.CylinderGeometry(.15, .15, 1.62, 18), hull, body); fuse.rotation.z = Math.PI / 2;
    ellipsoid(body, V(.9, 0, 0), [.22, .15, .15], hull, 18); ellipsoid(body, V(-.9, .02, 0), [.3, .1, .1], hull, 18);
    mesh(new THREE.BoxGeometry(.5, .03, 1.7), hull, body, V(0, -.02, 0));
    mesh(new THREE.BoxGeometry(.16, .34, .02), hull, body, V(0, .25, -.95));
    for (const z of [-.45, .45]) mesh(new THREE.CylinderGeometry(.13, .13, .55, 18), deck, body, V(-.12, -.16, z)).rotation.x = Math.PI / 2;
    reference(g, 'x', 'fuselage-length', .62);
  } else if (c.variant === 'cruise') {
    mesh(new THREE.BoxGeometry(2, .34, .52), hull, body, V(0, -.1));
    for (let i = 0; i < 4; i++) mesh(new THREE.BoxGeometry(1.7 - i * .22, .22, .42), deck, body, V(.05, .1 + i * .19));
    mesh(new THREE.CylinderGeometry(.09, .13, .42, 16), deck, body, V(-.55, .9));
    for (const x of [-.9, -.6]) for (const z of [-.28, .28]) mesh(new THREE.BoxGeometry(.25, .03, .12), basic('#e8f0f2', .8), body, V(x, .95, z));
    reference(g, 'x', 'overall-length', .68);
  } else {
    mesh(new THREE.BoxGeometry(2, .3, .5), hull, body, V(0, -.06));
    mesh(new THREE.BoxGeometry(1.95, .06, .62), deck, body, V(0, .14));
    mesh(new THREE.BoxGeometry(.34, .34, .26), deck, body, V(-.58, .32));
    for (let i = 0; i < 4; i++) line(body, [V(-.8 + i * .45, .181, -.18), V(-.6 + i * .45, .181, .18)], '#e4eef2', .65);
    rod(body, V(-.58, .48, 0), V(-.58, .78, 0), .015, deck);
    reference(g, 'x', 'overall-length', .86);
  }
}
function tissueSection(g, c) {
  const tone = standard(c.color, {roughness: .85}), tubeMat = standard('#b57c72', {roughness: .75}), body = new THREE.Group();
  g.add(body);
  if (c.variant === 'capillary') {
    const tube = mesh(new THREE.CylinderGeometry(.3, .3, 2.6, 32, 1, true), new THREE.MeshStandardMaterial({color: '#c08a80', roughness: .8, transparent: true, opacity: .55, side: THREE.DoubleSide}), body); tube.rotation.z = Math.PI / 2;
    for (let i = 0; i < 3; i++) ellipsoid(body, V(-.55 + i * .55, 0, 0), [.16, .07, .16], standard('#a14b45', {roughness: .6}), 18);
    for (let i = 0; i < 4; i++) ring(body, .31, .012, basic('#e5b7ad', .5), V(-.7 + i * .5, 0, 0), V(0, 0, 0));
    reference(g, 'x', 'vessel-bore-span', -.5);
  } else if (c.variant === 'tastebud') {
    mesh(new THREE.BoxGeometry(2, .3, .9), tone, body, V(0, -.35));
    ellipsoid(body, V(0, .05, 0), [.26, .42, .22], standard('#c99a94', {roughness: .8}), 22);
    ellipsoid(body, V(0, .48, 0), [.08, .06, .08], basic('#e8c6bc'));
    for (let i = 0; i < 7; i++) { const a = i / 7 * TAU; rod(body, V(0, .05, 0), V(Math.cos(a) * .3, .42, Math.sin(a) * .22), .008, tubeMat); }
    for (let i = 0; i < 6; i++) ellipsoid(body, V(-.75 + i * .3, -.24, .34), [.1, .06, .08], standard('#d8a79e'), 14);
    reference(g, 'x', 'taste-pore-groove-span', -.62);
  } else {
    for (const [x, y, z, r] of [[-.6, .18, 0, .42], [0, .34, .1, .45], [.55, .12, -.12, .4], [-.3, -.32, .15, .38], [.4, -.28, .2, .36], [.05, -.02, -.38, .3]]) {
      ellipsoid(body, V(x, y, z), [r, r, r], new THREE.MeshStandardMaterial({color: '#cf9d92', roughness: .85, transparent: true, opacity: .62, side: THREE.DoubleSide}), 26);
      ellipsoid(body, V(x, y, z), [r * .78, r * .78, r * .78], basic('#f0ded9', .18), 22);
    }
    const cap = mesh(new THREE.CylinderGeometry(.07, .07, 1.9, 14), tubeMat, body, V(.1, -.7, .2)); cap.rotation.z = Math.PI / 2;
    for (let i = 0; i < 4; i++) ellipsoid(body, V(-.55 + i * .38, -.7, .2), [.05, .03, .05], standard('#a84d47'), 12);
    reference(g, 'x', 'alveolar-cluster-span', -.95);
  }
}
function crystalLattice(g, c) {
  const atom = standard(c.color, {metalness: .55, roughness: .3}), bond = standard('#b9c8cf', {metalness: .6, roughness: .35}), body = new THREE.Group();
  g.add(body);
  if (c.variant === 'snowflake') {
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * TAU, dir = V(Math.cos(a), Math.sin(a), 0);
      rod(body, V(), dir.clone().multiplyScalar(.95), .035, bond);
      for (const t of [.45, .7]) { const p = dir.clone().multiplyScalar(t); for (const s of [-1, 1]) { const q = dir.clone().multiplyScalar(t + .18); const side = V(-dir.y, dir.x, 0).multiplyScalar(s * .22); rod(body, p, q.add(side), .018, bond); } }
      ellipsoid(body, dir.clone().multiplyScalar(.95), [.08, .08, .08], atom, 14);
    }
    ellipsoid(body, V(), [.14, .14, .06], atom);
  } else if (c.variant === 'dot') {
    ellipsoid(body, V(), [.5, .5, .5], standard('#c9a45c', {metalness: .6, roughness: .25}), 28);
    for (let i = 0; i < 26; i++) { const a = i * 2.39996, y = (i % 5 - 2) * .22, r = .62; ellipsoid(body, V(Math.cos(a) * r, y, Math.sin(a) * r), [.05, .05, .05], atom, 12); }
  } else {
    for (let x = -1; x <= 1; x++) for (let y = -1; y <= 1; y++) for (let z = -1; z <= 1; z++) {
      const p = V(x * .42, y * .42, z * .42);
      ellipsoid(body, p, [.07, .07, .07], atom, 14);
      if (x < 1) rod(body, p, V((x + 1) * .42, y * .42, z * .42), .012, bond);
      if (y < 1) rod(body, p, V(x * .42, (y + 1) * .42, z * .42), .012, bond);
      if (z < 1) rod(body, p, V(x * .42, y * .42, (z + 1) * .42), .012, bond);
    }
  }
  reference(g, 'x', 'lattice-period-span', -.72);
}
function hydrology(g, c) {
  const land = standard('#6f7f68', {roughness: 1}), water = standard('#3f7f96', {roughness: .25, metalness: .15}), body = new THREE.Group();
  g.add(body);
  if (c.variant === 'lake') {
    mesh(new THREE.BoxGeometry(2, .18, 1.4), land, body, V(0, -.12));
    ellipsoid(body, V(0, -.02, 0), [.72, .03, .42], water, 30);
    ring(body, .74, .018, basic('#9fc4cc', .6), V(0, .01, 0), V(Math.PI / 2, 0, 0));
    mesh(new THREE.BoxGeometry(.5, .32, .6), standard('#5f6f58'), body, V(-.75, .06, -.42));
  } else {
    mesh(new THREE.BoxGeometry(2, .16, 1.3), land, body, V(0, -.1));
    const pts = Array.from({length: 40}, (_, i) => { const t = i / 39; return V(-.95 + t * 1.9, .005 + Math.sin(t * 5.2) * .05, Math.sin(t * 3.1) * .22); });
    curve(body, pts, .06, water);
    for (let i = 0; i < 4; i++) curve(body, pts.map(p => p.clone().add(V(0, .01, -.25 + i * .13))), .008, basic('#9fc4cc', .3));
  }
  reference(g, 'x', 'hydrological-span', -.42);
}
function orbitalSystem(g, c) {
  const sat = standard('#d9b37e', {metalness: .7, roughness: .3}), center = V(-1), belt = c.variant === 'belt';
  ellipsoid(g, center, [.16, .16, .16], standard('#3f6f96', {roughness: .55}), 24);
  halo(g, .3, '#79b6d9', .12, center);
  for (let i = 0; i < (belt ? 4 : 2); i++) ring(g, 2 - i * .18, .004, basic(c.color, .35), center, V(Math.PI / 2, 0, 0));
  for (let i = 0; i < (belt ? 14 : 4); i++) {
    const a = i * 2.399 + i % 2 * .3, r = belt ? 1.55 + (i % 4) * .12 : 1.7 + (i % 2) * .2;
    if (belt) ellipsoid(g, V(center.x + Math.cos(a) * r, Math.sin(i) * .06, Math.sin(a) * r), [.018, .018, .018], basic('#b9a98d'), 8);
    else mesh(new THREE.BoxGeometry(.12, .09, .08), sat, g, V(center.x + Math.cos(a) * r, Math.sin(i) * .06, Math.sin(a) * r));
  }
  reference(g, 'x', 'orbital-radius', -.32);
}
const builders = {architecture, terrain, field, coin, pencil, grain, hand, arthropod, whale, microbe, organelle, membrane, motor, molecule, atom, nucleus, wave, sphere: sphereObject, mirror, filament, galaxy, cluster, nebula, distance, device, vehicle, 'tissue-section': tissueSection, 'crystal-lattice': crystalLattice, hydrology, 'orbital-system': orbitalSystem};
export const SPATIAL_TEMPLATES = Object.freeze(Object.keys(builders));

/** Builds q=2 world units on the explicitly named reference segment. */
export function createSpatialObject(entry, config = entry?.visual) {
  if (!Number.isFinite(entry?.quantity?.value) || entry.quantity.value <= 0) throw new RangeError('Spatial object requires a finite positive comparison length');
  if (!config || !builders[config.template]) throw new Error(`Missing spatial template for ${entry?.id}`);
  if (!config.caption || !config.note || !config.referenceAxis || !config.color) throw new Error(`Incomplete visual configuration: ${entry.id}`);
  if (config.sourceMeasure && config.sourceMeasure !== entry.quantity.measure) throw new Error(`Spatial measurement configuration is stale: ${entry.id}`);
  const group = new THREE.Group(); group.name = entry.id;
  builders[config.template](group, config, rng(entry.id));
  if (!group.userData.reference) throw new Error(`Template has no comparison reference: ${config.template}`);
  if (group.userData.reference.axis !== config.referenceAxis) throw new Error(`Spatial reference axis mismatch: ${entry.id}`);
  group.userData.template = config.template;
  group.userData.caption = config.caption;
  group.userData.note = config.note;
  group.userData.referenceAxis = config.referenceAxis;
  group.userData.framePadding = config.framePadding ?? .26;
  group.userData.quantity = {value: entry.quantity.value, measure: entry.quantity.measure, normalizedLength: 2};
  group.userData.parameters = {...config};
  const update = group.userData.update;
  group.userData.update = (delta = 0, time = 0) => {if (Number.isFinite(delta) && Number.isFinite(time)) update?.(Math.min(Math.max(delta, 0), .1), Math.max(time, 0));};
  return group;
}
