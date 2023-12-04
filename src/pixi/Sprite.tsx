import { useEffect, useRef } from 'react'
import { Sprite } from '@pixi/react'
import gsap from 'gsap'

type Props = {
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export const SpriteComponent = ({ setCount }: Props) => {
  const spriteRef = useRef(null)

  useEffect(() => {
    gsap.to(spriteRef.current, { duration: 199, ease: 'none', repeat: -1, rotation: 360 })
  }, [])

  return (
    <>
      <Sprite
        eventMode="dynamic"
        cursor="pointer"
        ref={spriteRef}
        image="/react.svg"
        x={400}
        y={100}
        anchor={{ x: 0.5, y: 0.5 }}
        onpointerup={() => setCount(prev => prev + 1)}
      />
      <Sprite image="/vite.svg" x={400} y={220} anchor={{ x: 0.5, y: 0.5 }} />
    </>
  )
}
