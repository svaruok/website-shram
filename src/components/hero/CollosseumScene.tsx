import { useMemo, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Sky } from '@react-three/drei';
import * as THREE from 'three';

// ─── Animated Construction Tools ─────────────────────────────────────────────
function AnimatedTools({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Track the clipping plane height more accurately
  const currentHeight = progress * 13.5;

  const tools = useMemo(() => {
    const items = [];
    // Place 6 hammers staggered at different heights and slightly different radiuses
    for (let i = 0; i < 6; i++) {
      // Add some randomness to the angle so they aren't perfectly spaced
      const angle = (i / 6) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
      // Slightly randomize the radius so some are closer and some are further
      const radiusX = 11.5 + (Math.random() * 1.5 - 0.75);
      const radiusZ = 10.0 + (Math.random() * 1.5 - 0.75);
      const x = Math.cos(angle) * radiusX;
      const z = Math.sin(angle) * radiusZ;
      // Stagger heights randomly by up to 4 units
      const heightOffset = Math.random() * 4 - 2;
      items.push({ id: i, x, z, angle, heightOffset, phase: Math.random() * Math.PI * 2 });
    }
    return items;
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    
    // Very slow orbit
    groupRef.current.rotation.y = t * 0.02;

    groupRef.current.children.forEach((child, i) => {
      const item = tools[i];
      // Float up and down smoothly
      const floatY = Math.sin(t * 3 + item.phase) * 0.2;
      // Include the random height offset so they work on different levels
      // Lowered the base offset significantly so they hit lower down on the walls
      const targetY = currentHeight + item.heightOffset + floatY - 6.5;
      
      child.position.y += (targetY - child.position.y) * 0.1;

      // Look at the center so the hammer strikes inwards at the wall
      child.lookAt(0, child.position.y, 0);
      
      // Swinging hammer motion on the X axis
      const swing = Math.sin(t * 6 + item.phase);
      // Map sine wave to a harsh striking motion (fast down, slow up)
      const strike = Math.pow(Math.max(0, swing), 2) - Math.pow(Math.max(0, -swing), 0.5);
      child.rotation.x = strike * 0.8 - Math.PI / 6; 
    });
  });

  return (
    <group ref={groupRef}>
      {tools.map((item) => (
        <group key={item.id} position={[item.x, 0, item.z]}>
          {/* Sledgehammer Model */}
          <group position={[0, 0, 0]}>
            {/* Handle - Pivot is at [0,0,0], so we move the handle UP by half its length (0.7) */}
            <mesh position={[0, 0.7, 0]}>
              <cylinderGeometry args={[0.04, 0.03, 1.4, 16]} />
              <meshStandardMaterial color="#3e2723" roughness={0.9} />
            </mesh>
            {/* Metal collar connecting head to handle */}
            <mesh position={[0, 1.35, 0]}>
              <cylinderGeometry args={[0.045, 0.045, 0.15, 16]} />
              <meshStandardMaterial color="#a0a0a0" metalness={0.8} roughness={0.3} />
            </mesh>
            {/* Sledgehammer Head - moved to the top of the handle (y=1.4) */}
            <mesh position={[0, 1.4, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.12, 0.12, 0.5, 32]} />
              <meshStandardMaterial color="#b0b0b0" metalness={0.9} roughness={0.4} />
            </mesh>
            {/* Beveled caps on the sledgehammer head */}
            <mesh position={[0.26, 1.4, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.11, 0.12, 0.02, 32]} />
              <meshStandardMaterial color="#909090" metalness={0.95} roughness={0.2} />
            </mesh>
            <mesh position={[-0.26, 1.4, 0]} rotation={[0, 0, -Math.PI / 2]}>
              <cylinderGeometry args={[0.11, 0.12, 0.02, 32]} />
              <meshStandardMaterial color="#909090" metalness={0.95} roughness={0.2} />
            </mesh>
          </group>
        </group>
      ))}
    </group>
  );
}

// ─── The Imported Colosseum Model ─────────────────────────────────────────────
function ColosseumModel({ progress }: { progress: number }) {
  const { scene } = useGLTF('/models/colosseum_rome_italy_compressed.glb');
  const boxInfo   = useRef({ minY: 0, maxY: 0, height: 0 });
  const customUniforms = useRef({
    clipY: { value: 1000 },
    clipRadiusSq: { value: 1800.0 } // Safely covers the entire Colosseum (radius ~42)
  });

  useEffect(() => {
    const box  = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const scale = 15 / size.y;
    scene.scale.set(scale, scale, scale);
    scene.updateMatrixWorld();

    const boxScaled = new THREE.Box3().setFromObject(scene);
    const center    = new THREE.Vector3();
    boxScaled.getCenter(center);
    scene.position.x = -center.x;
    scene.position.z = -center.z;
    scene.position.y = -boxScaled.min.y - 0.2;
    scene.updateMatrixWorld();

    const finalBox = new THREE.Box3().setFromObject(scene);
    boxInfo.current = {
      minY: finalBox.min.y,
      maxY: finalBox.max.y,
      height: finalBox.max.y - finalBox.min.y,
    };
    customUniforms.current.clipY.value = finalBox.min.y - 1;

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          mats.forEach(mat => {
            mat.clippingPlanes = []; // Remove standard clipping
            mat.side = THREE.DoubleSide;
            
            mat.onBeforeCompile = (shader) => {
              shader.uniforms.clipY = customUniforms.current.clipY;
              shader.uniforms.clipRadiusSq = customUniforms.current.clipRadiusSq;

              shader.vertexShader = shader.vertexShader.replace(
                'void main() {',
                `varying vec3 vWorldPosCustom;
                 void main() {
                   vWorldPosCustom = (modelMatrix * vec4(position, 1.0)).xyz;`
              );

              shader.fragmentShader = shader.fragmentShader.replace(
                'void main() {',
                `uniform float clipY;
                 uniform float clipRadiusSq;
                 varying vec3 vWorldPosCustom;
                 void main() {
                   float distSq = vWorldPosCustom.x * vWorldPosCustom.x + vWorldPosCustom.z * vWorldPosCustom.z;
                   if (distSq < clipRadiusSq && vWorldPosCustom.y > clipY) {
                     discard;
                   }`
              );
            };
            mat.needsUpdate = true;
          });
        }
        mesh.castShadow    = false;
        mesh.receiveShadow = false;
      }
    });
  }, [scene]);

  useFrame(() => {
    const rawTarget = boxInfo.current.minY + (boxInfo.current.height * progress * 1.05);
    const targetC   = Math.max(0.5, rawTarget);
    customUniforms.current.clipY.value += (targetC - customUniforms.current.clipY.value) * 0.04;
  });

  return <primitive object={scene} />;
}

// ─── Scene ───────────────────────────────────────────────────────────────────
interface CollosseumSceneProps {
  progress: number;
  isMobile: boolean;
}

export default function CollosseumScene({ progress, isMobile }: CollosseumSceneProps) {

  return (
    <>
      {/* Warm sandy golden sky */}
      <color attach="background" args={['#f9fafb']} />
      <fog attach="fog" color="#f9fafb" near={50} far={180} />

      {/* ── LIGHTING — pure directional, no HDRI env ──────────────────────── */}
      <ambientLight intensity={2.0} color="#ffffff" />
      <directionalLight position={[30, 35, 20]} intensity={3.5} color="#ffffff" />
      <directionalLight position={[-20, 15, -15]} intensity={0.8} color="#e5e7eb" />

      {/* Ground */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[42, 44, 0.8, 64]} />  {/* Increased radius to fully support the Colosseum */}
        <meshStandardMaterial color="#f3f4f6" roughness={0.9} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.0, 0]}>
        <circleGeometry args={[2000, 32]} />
        <meshStandardMaterial color="#e5e7eb" roughness={1} />
      </mesh>

      <AnimatedTools progress={progress} />
      <ColosseumModel progress={progress} />
    </>
  );
}

useGLTF.preload('/models/colosseum_rome_italy_compressed.glb');
