import { Stage, Container, Text } from '@pixi/react'
import { SpriteComponent } from './Sprite'
import * as PIXI from 'pixi.js'

type Props = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export const StageComponent = ({ count, setCount }: Props) => {
  return (
    <Stage>
      <SpriteComponent setCount={setCount} />

      <Container x={400} y={330}>
        <Text
          text={`Counter value: ${count}`}
          anchor={{ x: 0.5, y: 0.5 }}
          style={
            new PIXI.TextStyle({
              align: 'center',
              fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
              fontSize: 22,
              fontWeight: '400',
              fill: ['#ffffff', '#00ff99'],
              stroke: '#01d27e',
              strokeThickness: 5,
              letterSpacing: 10,
              dropShadow: true,
              dropShadowColor: '#ccced2',
              dropShadowBlur: 4,
              dropShadowAngle: Math.PI / 6,
              dropShadowDistance: 6,
              wordWrap: true,
              wordWrapWidth: 440
            })
          }
        />
      </Container>
    </Stage>
  )
}
