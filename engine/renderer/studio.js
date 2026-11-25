import * as THREE from 'three';
import {disposeObject} from './assets.js';

function buildStudio() {
  const room = new THREE.Scene();
  room.background = new THREE.Color(.045, .055, .07);
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(24, 32, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        top: {value: new THREE.Color(.12, .15, .19)},
        bottom: {value: new THREE.Color(.015, .02, .028)}
      },
      vertexShader: 'varying float h; void main(){ h = normalize(position).y; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 bottom; varying float h; void main(){ gl_FragColor = vec4(mix(bottom, top, clamp(h*.5+.5,0.,1.)),1.); }'
    })
  );
  room.add(dome);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.MeshBasicMaterial({color: new THREE.Color(.03, .04, .05)}));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -5.2; room.add(floor);
  const panels = [
    {size: [9, 6], position: [0, 7, 0], color: [4.2, 4.35, 4.6]},
    {size: [6, 10], position: [-9, 1, 2], color: [2.8, 3.15, 3.6]},
    {size: [5, 8], position: [8, 2, -3], color: [3.4, 2.9, 2.5]},
    {size: [4, 3], position: [2, -3, 8], color: [.55, .78, 1.05]},
    {size: [3, 9], position: [-4, 1, -8], color: [.7, .85, 1.0]}
  ];
  for (const panel of panels) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(...panel.size), new THREE.MeshBasicMaterial({color: new THREE.Color(...panel.color), side: THREE.DoubleSide}));
    mesh.position.set(...panel.position); mesh.lookAt(0, 0, 0); room.add(mesh);
  }
  return room;
}

// Locally generated soft studio reflection environment. No external HDR files.
export function createStudioEnvironment(renderer) {
  const room = buildStudio();
  const generator = new THREE.PMREMGenerator(renderer);
  generator.compileEquirectangularShader();
  try {
    const target = generator.fromScene(room, .035, .1, 100);
    target.texture.colorSpace = THREE.SRGBColorSpace;
    return target;
  } finally {
    generator.dispose();
    disposeObject(room);
  }
}

// A dark deep-space environment: enough directional reflection for metals and
// glass, without lifting the black of the stage.
export function createSpaceEnvironment(renderer) {
  const room = new THREE.Scene();
  room.background = new THREE.Color(.008, .012, .024);
  const sun = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshBasicMaterial({color: new THREE.Color(3.2, 2.1, 1.3), side: THREE.DoubleSide}));
  sun.position.set(-6, 4, -10); sun.lookAt(0, 0, 0); room.add(sun);
  const fill = new THREE.Mesh(new THREE.PlaneGeometry(8, 4), new THREE.MeshBasicMaterial({color: new THREE.Color(.18, .3, .58), side: THREE.DoubleSide}));
  fill.position.set(8, -2, 4); fill.lookAt(0, 0, 0); room.add(fill);
  const rim = new THREE.Mesh(new THREE.PlaneGeometry(2, 8), new THREE.MeshBasicMaterial({color: new THREE.Color(.35, .65, 1.0), side: THREE.DoubleSide}));
  rim.position.set(2, 2, 9); rim.lookAt(0, 0, 0); room.add(rim);
  const generator = new THREE.PMREMGenerator(renderer);
  try {
    return generator.fromScene(room, .02, .1, 100);
  } finally {
    generator.dispose();
    disposeObject(room);
  }
}
