import { useMemo, useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
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

// ─── Camera auto-orbit (Tied to Scroll!) ─────────────────────────────────────────
function CameraRig({ isMobile }: { isMobile: boolean }) {
  const target = useMemo(() => new THREE.Vector3(0, 2, 0), []);
  
  useFrame(({ clock, camera }) => {
    const t    = clock.getElapsedTime();
    const pull = Math.min(1, t / 4.0);
    
    const baseR = isMobile ? 14 : 11;
    const r     = 15 + pull * baseR;
    
    // Add a gentle floating effect that is always playing
    const currentY = 6 + pull * 8 + Math.sin(t * 0.5) * 0.5;
    
    // THE MAGIC: Tie rotation directly to scroll position!
    // As you scroll down 1 full screen height, it rotates ~90 degrees.
    const scrollOffset = typeof window !== 'undefined' ? window.scrollY : 0;
    const scrollAngle = (scrollOffset / window.innerHeight) * (Math.PI / 1.5);
    
    // Combine initial gentle auto-pan with the aggressive scroll rotation
    const autoPan = Math.sin(t * 0.1) * -0.2;
    const angle = autoPan - scrollAngle;

    camera.position.set(
      Math.sin(angle) * r,
      currentY,
      Math.cos(angle) * r,
    );
    camera.lookAt(target);
  });
  return null;
}

// ─── The Imported Colosseum Model ─────────────────────────────────────────────
function ColosseumModel({ progress }: { progress: number }) {
  const { scene } = useGLTF('/models/colosseum_rome_italy_compressed.glb');
  const clipPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, -1, 0), 0), []);
  const boxInfo   = useRef({ minY: 0, maxY: 0, height: 0 });

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
    clipPlane.constant = finalBox.min.y - 1;

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          mats.forEach(mat => {
            mat.clippingPlanes = [clipPlane];
            mat.clipShadows    = false; // no shadows = faster
            mat.side           = THREE.DoubleSide;
            mat.needsUpdate    = true;
          });
        }
        mesh.castShadow    = false; // no shadows = faster
        mesh.receiveShadow = false;
      }
    });
  }, [scene, clipPlane]);

  useFrame(() => {
    const rawTarget = boxInfo.current.minY + (boxInfo.current.height * progress * 1.05);
    const targetC   = Math.max(0.5, rawTarget);
    clipPlane.constant += (targetC - clipPlane.constant) * 0.04;
  });

  return <primitive object={scene} />;
}

// ─── Scene ───────────────────────────────────────────────────────────────────
interface CollosseumSceneProps {
  progress: number;
  isMobile: boolean;
}

export default function CollosseumScene({ progress: actualProgress, isMobile }: CollosseumSceneProps) {
  // The user requested the ruins model to be fully visible (100%) at all times up to 999,999.
  // The hammers will work at the top of the fully generated ruins.
  const progress = 1.0;

  return (
    <>
      {/* Warm sandy golden sky */}
      <color attach="background" args={['#e6b981']} />
      <fog attach="fog" color="#e6b981" near={50} far={180} />

      <Sky 
        distance={450000} 
        sunPosition={[40, 15, -20]} 
        turbidity={1.5} 
        rayleigh={1.2} 
        mieCoefficient={0.005} 
        mieDirectionalG={0.8} 
      />

      {/* ── LIGHTING — pure directional, no HDRI env ──────────────────────── */}
      <ambientLight intensity={2.0} color="#ffe8b0" />
      <directionalLight position={[30, 35, 20]} intensity={3.5} color="#ffcc60" />
      <directionalLight position={[-20, 15, -15]} intensity={0.8} color="#ffd090" />

      <CameraRig isMobile={isMobile} />

      {/* Ground */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[18, 19, 0.8, 32]} />  {/* reduced segments from 64 → 32 */}
        <meshStandardMaterial color="#e8c98a" roughness={0.9} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.0, 0]}>
        <circleGeometry args={[2000, 32]} />
        <meshStandardMaterial color="#c0a060" roughness={1} />
      </mesh>

      <AnimatedTools progress={progress} />
      <ColosseumModel progress={progress} />
    </>
  );
}

useGLTF.preload('/models/colosseum_rome_italy_compressed.glb');
