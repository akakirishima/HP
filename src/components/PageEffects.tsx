import React from 'react'

type Props = { route?: string }

// 星: 微小点の瞬き
function Stars() {
  const count = 120
  const items = Array.from({ length: count }).map((_, i) => {
    const size = 1 + Math.random() * 1.8
    const top = Math.random() * 100
    const left = Math.random() * 100
    const delay = Math.random() * 6
    const dur = 3 + Math.random() * 4
    return (
      <span
        key={i}
        style={{
          position: 'absolute',
          top: `${top}%`,
          left: `${left}%`,
          width: size,
          height: size,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.9)',
          boxShadow: '0 0 6px rgba(255,255,255,0.6)',
          animation: `pf-twinkle ${dur}s ease-in-out ${delay}s infinite`,
        }}
      />
    )
  })
  return <>{items}</>
}

// 流線: 斜めの光の筋が横切る
function Streaks() {
  const count = 16
  const items = Array.from({ length: count }).map((_, i) => {
    const h = 24 + Math.random() * 40 // 高さ
    const y = Math.random() * 100
    const delay = Math.random() * 6
    const dur = 6 + Math.random() * 6
    const opacity = 0.08 + Math.random() * 0.12
    const blur = 4 + Math.random() * 10
    return (
      <span
        key={i}
        style={{
          position: 'absolute',
          top: `${y}%`,
          left: '-20vw',
          width: '30vw',
          height: h,
          transform: 'rotate(12deg)',
          background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,${opacity}) 45%, rgba(255,255,255,0) 100%)`,
          filter: `blur(${blur}px)`,
          animation: `pf-streak ${dur}s linear ${delay}s infinite`,
          mixBlendMode: 'screen',
        }}
      />
    )
  })
  return <>{items}</>
}

// グラデ霧: 大きなグラデがゆっくり流れる
function Fog() {
  const layers = [
    { s: 1200, x: '-20%', y: '10%', c: 'rgba(255,255,255,0.06)', d: 48 },
    { s: 900, x: '60%', y: '50%', c: 'rgba(255,255,255,0.05)', d: 52 },
    { s: 1000, x: '20%', y: '70%', c: 'rgba(255,255,255,0.045)', d: 60 },
  ]
  return (
    <>
      {layers.map((l, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: l.x,
            top: l.y,
            width: l.s,
            height: l.s,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${l.c} 0%, rgba(255,255,255,0.0) 60%)`,
            filter: 'blur(40px)',
            animation: `pf-fog ${l.d}s ease-in-out ${i * 4}s infinite alternate`,
            mixBlendMode: 'screen',
          }}
        />
      ))}
    </>
  )
}

// 幾何模様: 回転する正方形/三角
function Geometric() {
  const items = [
    { x: '18%', y: '24%', s: 38, r: 18, c: 'rgba(255,255,255,0.12)' },
    { x: '72%', y: '32%', s: 54, r: -26, c: 'rgba(255,255,255,0.10)' },
    { x: '42%', y: '68%', s: 44, r: 12, c: 'rgba(255,255,255,0.11)' },
    { x: '60%', y: '78%', s: 36, r: -8, c: 'rgba(255,255,255,0.12)' },
  ]
  return (
    <>
      {items.map((o, i) => (
        <span
          key={`sq-${i}`}
          style={{
            position: 'absolute', left: o.x, top: o.y, width: o.s, height: o.s,
            border: `1px solid ${o.c}`, transform: `rotate(${o.r}deg)`,
            animation: `pf-geo ${16 + i * 4}s ease-in-out ${i}s infinite alternate`,
            mixBlendMode: 'screen',
          }}
        />
      ))}
      {/* 三角形 */}
      {[{ x: '30%', y: '40%', s: 52, r: 0 }, { x: '78%', y: '62%', s: 40, r: 12 }].map((t, i) => (
        <span key={`tri-${i}`}
          style={{
            position: 'absolute', left: t.x, top: t.y, width: 0, height: 0,
            borderLeft: `${t.s / 2}px solid transparent`,
            borderRight: `${t.s / 2}px solid transparent`,
            borderBottom: `${t.s}px solid rgba(255,255,255,0.10)`,
            transform: `rotate(${t.r}deg)`,
            animation: `pf-geo ${18 + i * 5}s ease-in-out ${i * 1.2}s infinite alternate`,
            mixBlendMode: 'screen',
          }}
        />
      ))}
    </>
  )
}

// オーロラ: なめらかなカラーバンドが流れる
function Aurora() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(1200px 600px at 20% 20%, rgba(255,0,153,0.10), transparent 60%),\
           radial-gradient(1000px 700px at 80% 30%, rgba(0,220,255,0.10), transparent 60%),\
           radial-gradient(900px 600px at 50% 80%, rgba(255,255,0,0.08), transparent 60%)',
        animation: 'pf-aurora 22s ease-in-out infinite alternate',
        filter: 'blur(12px)',
        mixBlendMode: 'screen',
      }}
    />
  )
}

export default function PageEffects({ route }: Props) {
  let effect: React.ReactNode = null
  if (!route) route = '/'
  // ページ割当: 星(home), 流線(work), 幾何(blog), 霧(portfolio), 星(contact)
  if (route === '/' || route.includes('/home')) effect = <Stars />
  else if (route.includes('/work')) effect = <Streaks />
  else if (route.includes('/blog')) effect = <Geometric />
  else if (route.includes('/portfolio')) effect = <Fog />
  else if (route.includes('/contact')) effect = <Aurora />

  return (
    <div
      className="page-effects"
      aria-hidden
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}
    >
      {effect}
    </div>
  )
}
