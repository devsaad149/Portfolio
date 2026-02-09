import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import profileImg from '../../assets/profile.png';

const Profile3D = () => {
    const meshRef = useRef();
    const texture = useTexture(profileImg);

    useFrame((state) => {
        const { x, y } = state.mouse;
        if (meshRef.current) {
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.4, 0.1);
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.4, 0.1);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef}>
                <planeGeometry args={[3, 3.8]} />
                <meshStandardMaterial map={texture} transparent={true} side={THREE.DoubleSide} />

                {/* Glow Effect / Border */}
                <mesh position={[0, 0, -0.01]}>
                    <planeGeometry args={[3.2, 4]} />
                    <meshBasicMaterial color="#6366f1" transparent opacity={0.3} />
                </mesh>
            </mesh>
        </Float>
    );
};

export default Profile3D;
