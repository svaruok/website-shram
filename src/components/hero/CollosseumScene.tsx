import { useMemo, useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Sky } from '@react-three/drei';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

// ─── Animated Construction Tools ─────────────────────────────────────────────
function AnimatedTools({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const tools = useMemo(() => {
    const items = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
      const radiusX = 11.5 + (Math.random() * 1.5 - 0.75);
      const radiusZ = 10.0 + (Math.random() * 1.5 - 0.75);
      const x = Math.cos(angle) * radiusX;
      const z = Math.sin(angle) * radiusZ;
      const heightOffset = Math.random() * 4 - 2;
      items.push({ id: i, x, z, angle, heightOffset, phase: Math.random() * Math.PI * 2 });
    }
    return items;
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    const currentHeight = scrollProgress.get() * 13.5;
    
    groupRef.current.rotation.y = t * 0.02;

    groupRef.current.children.forEach((child, i) => {
      const item = tools[i];
      const floatY = Math.sin(t * 3 + item.phase) * 0.2;
      const targetY = currentHeight + item.heightOffset + floatY - 6.5;
      
      child.position.y += (targetY - child.position.y) * 0.1;
      child.lookAt(0, child.position.y, 0);
      
      const swing = Math.sin(t * 6 + item.phase);
      const strike = Math.pow(Math.max(0, swing), 2) - Math.pow(Math.max(0, -swing), 0.5);
      child.rotation.x = strike * 0.8 - Math.PI / 6; 
    });
  });

  return (
    <group ref={groupRef}>
      {tools.map((item) => (
        <group key={item.id} position={[item.x, 0, item.z]}>
          <group position={[0, 0, 0]}>
            <mesh position={[0, 0.7, 0]}>
              <cylinderGeometry args={[0.04, 0.03, 1.4, 16]} />
              <meshStandardMaterial color="#3e2723" roughness={0.9} />
            </mesh>
            <mesh position={[0, 1.35, 0]}>
              <cylinderGeometry args={[0.045, 0.045, 0.15, 16]} />
              <meshStandardMaterial color="#a0a0a0" metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0, 1.4, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.12, 0.12, 0.5, 32]} />
              <meshStandardMaterial color="#b0b0b0" metalness={0.9} roughness={0.4} />
            </mesh>
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

function CameraRig({ isMobile }: { isMobile: boolean }) {
  const target = useMemo(() => new THREE.Vector3(0, 2, 0), []);
  useFrame(({ clock, camera }) => {
    const t    = clock.getElapsedTime();
    // Instead of time-based pull, we just orbit slowly
    const r     = isMobile ? 18 : 15;
    const currentY = 10 + Math.sin(t * 0.2) * 1.5;
    const angle    = Math.sin(t * 0.12) * -0.35;

    camera.position.set(
      Math.sin(angle) * r,
      currentY,
      Math.cos(angle) * r,
    );
    camera.lookAt(target);
  });
  return null;
}

function ColosseumModel({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
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
            mat.clipShadows    = false;
            mat.side           = THREE.DoubleSide;
            mat.needsUpdate    = true;
          });
        }
        mesh.castShadow    = false;
        mesh.receiveShadow = false;
      }
    });
  }, [scene, clipPlane]);

  useFrame(() => {
    const progress = scrollProgress.get();
    const rawTarget = boxInfo.current.minY + (boxInfo.current.height * progress * 1.05);
    const targetC   = Math.max(0.5, rawTarget);
    clipPlane.constant += (targetC - clipPlane.constant) * 0.04;
  });

  return <primitive object={scene} />;
}

interface CollosseumSceneProps {
  scrollProgress: MotionValue<number>;
  isMobile: boolean;
}

export default function CollosseumScene({ scrollProgress, isMobile }: CollosseumSceneProps) {
  return (
    <>
      <color attach="background" args={['#0a050e']} />
      <fog attach="fog" color="#0a050e" near={20} far={60} />

      <ambientLight intensity={1.5} color="#ffe8b0" />
      <directionalLight position={[30, 35, 20]} intensity={2.5} color="#ffcc60" />
      <directionalLight position={[-20, 15, -15]} intensity={0.5} color="#ffd090" />

      <CameraRig isMobile={isMobile} />

      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[18, 19, 0.8, 32]} />
        <meshStandardMaterial color="#111" roughness={0.9} />
      </mesh>
      
      <AnimatedTools scrollProgress={scrollProgress} />
      <ColosseumModel scrollProgress={scrollProgress} />
    </>
  );
}

useGLTF.preload('/models/colosseum_rome_italy_compressed.glb');
