"use client";

import { useRef, useMemo, FC } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

interface BeamsProps {
  beamCount?: number;
  colorPrimary?: string;
  colorSecondary?: string;
  speed?: number;
  opacity?: number;
  blur?: number;
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColorPrimary;
  uniform vec3 uColorSecondary;
  uniform float uOpacity;
  uniform float uBlur;
  varying vec2 vUv;

  // Simplex noise functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
      + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 4; i++) {
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;

    // Create multiple light beams with different phases
    float beams = 0.0;

    for (float i = 0.0; i < 8.0; i++) {
      float offset = i * 0.15;
      float phase = i * 0.7;

      // Beam position with noise-based movement
      float noiseX = fbm(vec2(uTime * 0.15 + phase, i * 0.5)) * 0.3;
      float beamX = offset + noiseX + 0.1;

      // Distance from beam center
      float dist = abs(uv.x - beamX);

      // Beam width varies with noise
      float width = 0.02 + fbm(vec2(uTime * 0.1 + i, uv.y * 2.0)) * 0.03;
      width *= uBlur;

      // Soft beam edge
      float beam = smoothstep(width, 0.0, dist);

      // Vertical fade - stronger at top, fading at bottom
      float verticalFade = pow(1.0 - uv.y, 0.5) * smoothstep(0.0, 0.3, uv.y);

      // Add slight wave to the beam
      float wave = sin(uv.y * 10.0 + uTime * 0.5 + phase) * 0.5 + 0.5;

      // Intensity variation along the beam
      float intensity = (0.6 + wave * 0.4) * verticalFade;

      beams += beam * intensity * (0.4 + i * 0.08);
    }

    // Color gradient based on position and time
    float colorMix = fbm(vec2(uv.x * 2.0, uTime * 0.1)) * 0.5 + 0.5;
    vec3 color = mix(uColorPrimary, uColorSecondary, colorMix);

    // Add subtle glow
    float glow = beams * 0.5;
    color += glow * uColorPrimary * 0.3;

    // Final output with opacity
    float alpha = beams * uOpacity;
    alpha = clamp(alpha, 0.0, 1.0);

    gl_FragColor = vec4(color, alpha);
  }
`;

const BeamPlane: FC<{
  colorPrimary: string;
  colorSecondary: string;
  speed: number;
  opacity: number;
  blur: number;
}> = ({ colorPrimary, colorSecondary, speed, opacity, blur }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColorPrimary: { value: new THREE.Color(colorPrimary) },
    uColorSecondary: { value: new THREE.Color(colorSecondary) },
    uOpacity: { value: opacity },
    uBlur: { value: blur },
  }), [colorPrimary, colorSecondary, opacity, blur]);

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

const Beams: FC<BeamsProps> = ({
  colorPrimary = "#3b82f6",
  colorSecondary = "#8b5cf6",
  speed = 0.3,
  opacity = 0.6,
  blur = 1.0,
}) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <BeamPlane
          colorPrimary={colorPrimary}
          colorSecondary={colorSecondary}
          speed={speed}
          opacity={opacity}
          blur={blur}
        />
      </Canvas>
    </div>
  );
};

export default Beams;
