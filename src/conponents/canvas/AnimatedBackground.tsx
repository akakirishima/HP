import * as THREE from 'three'
import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

// ====== GLSL（"知能の波" - Blue/White Academic Wave）======
const pointsVertex = /* glsl */`
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  varying vec2 vUv;
  varying float vWave; // 波の高さ情報
  void main(){
    vUv = uv;
    vec3 p = position;

    // より緩やかで知的な波の動き
    float fX = 4.0;               
    float fY = 2.0;               
    float speed = 0.4;            

    // 複雑すぎない、流れるような波
    float wave = sin(vUv.x * fX + uTime * speed);
    wave += sin(vUv.y * fY - uTime * 0.2) * 0.5;
    
    // Y軸方向へのオフセット（地形のような起伏）
    p.z += wave * 0.15;
    
    vWave = wave;

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    gl_PointSize = uSize * uPixelRatio;
    // 遠近によるサイズ減衰を少し弱めて「グリッド感」を出す
    gl_PointSize *= 2.0 / (-mvPosition.z + 2.5);
  }
`;

const pointsFragment = /* glsl */`
  precision mediump float;
  uniform float uOpacity;
  varying vec2 vUv;
  varying float vWave;

  void main(){
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    if(d > 0.5) discard; // 丸い点

    float mask = smoothstep(0.5, 0.4, d);

    // Color Palette (Matsuo Lab Style)
    // Deep Blue: #004098 -> (0.0, 0.25, 0.6)
    // Cyan: #4DA7E0 -> (0.3, 0.65, 0.88)
    // White: #FFFFFF
    
    vec3 colorBlue = vec3(0.0, 0.25, 0.6);
    vec3 colorCyan = vec3(0.3, 0.65, 0.88);
    vec3 colorWhite = vec3(1.0, 1.0, 1.0);

    // 波の高さに応じて色をブレンド
    // 低い所 -> Deep Blue
    // 中間 -> Cyan
    // 高い所 -> White
    
    float t = vWave * 0.5 + 0.5; // 0.0 ~ 1.0 range
    
    vec3 col = mix(colorBlue, colorCyan, t);
    col = mix(col, colorWhite, smoothstep(0.7, 1.0, t)); // 高いところだけ白く光る

    gl_FragColor = vec4(col, uOpacity * mask);
  }
`;

const WavePointsMaterial = shaderMaterial(
  {
    uTime: 0,
    uSize: 3.5, // Smaller particles for subtle effect
    uPixelRatio: Math.min(2, typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1),
    uOpacity: 0.5, // Reduced opacity
  },
  pointsVertex,
  pointsFragment
);
extend({ WavePointsMaterial });

function FullscreenPoints() {
  // @ts-expect-error - provided by extend
  const mat = useRef<THREE.ShaderMaterial>(null!)
  const { viewport } = useThree()

  // 密度を高めて「グリッド」「ネットワーク」感を出す
  const segments = 160;
  const segY = 100;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useFrame((_, dt) => { if (mat.current) (mat.current.uniforms as any).uTime.value += dt })

  React.useEffect(() => {
    const update = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (mat.current) (mat.current.uniforms as any).uPixelRatio.value = Math.min(2, window.devicePixelRatio || 1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <points scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1.5, 1.5, segments, segY]} />
      {/* @ts-expect-error - registered by extend */}
      <wavePointsMaterial ref={mat} />
    </points>
  )
}

export default function AnimatedBackground() {
  const view = (
    <Canvas
      className="bg-canvas"
      gl={{ antialias: true, alpha: true }} // alpha: trueで背景透過
      dpr={[1, 2]}
      camera={{ position: [0, 0, 1], fov: 50 }}
    >
      {/* 背景色はCSS (White) に任せるため、Canvas背景は透明に */}
      {/* <color attach="background" args={['#ffffff']} /> */}
      <FullscreenPoints />
    </Canvas>
  )

  return typeof document !== 'undefined' ? createPortal(view, document.body) : view
}
