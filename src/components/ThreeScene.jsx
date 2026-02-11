import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GradientShader = {
    uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#050505') },
        uColor2: { value: new THREE.Color('#1a1a1a') }, // Subtle gray
        uColor3: { value: new THREE.Color('#6366f1') }, // Indigo accent
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      // Slow moving noise
      float n = snoise(vUv * 2.0 + uTime * 0.1);
      float n2 = snoise(vUv * 4.0 - uTime * 0.05);

      // Mix colors based on noise
      vec3 color = mix(uColor1, uColor2, n * 0.5 + 0.5);
      
      // Add subtle accent spots
      float accent = smoothstep(0.4, 0.6, n2); 
      color = mix(color, uColor3, accent * 0.15); // Low opacity accent

      // Add grain
      float grain = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
      color += grain * 0.03;

      gl_FragColor = vec4(color, 1.0);
    }
  `
};

const Background = () => {
    const mesh = useRef();
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#080808') }, // Deep black
        uColor2: { value: new THREE.Color('#151515') }, // Dark gray
        uColor3: { value: new THREE.Color('#2a2a2a') }, // Light gray accent
    }), []);

    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
    });

    return (
        <mesh ref={mesh} scale={[10, 10, 1]}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={GradientShader.vertexShader}
                fragmentShader={GradientShader.fragmentShader}
                depthWrite={false}
                depthTest={false}
            />
        </mesh>
    );
};

const ThreeScene = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            background: '#050505'
        }}>
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
                <Background />
            </Canvas>
        </div>
    );
};

export default ThreeScene;
