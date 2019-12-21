import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'

type bubbleContent = {
    width: number
    height: number
    borderRadius: number
    color: string
}

export default (props: any) => {
    const { width, height, borderRadius, color, opacity, bottom, text } = props

    return (
        <Wrapper opacity={opacity}>
            <Content
                width={width}
                height={height}
                borderRadius={borderRadius}
                color={color}
            >
                <Text>{text}</Text>
            </Content>
            <Bubble size={bottom} />
        </Wrapper>
    )
}
const Wrapper = styled.View((props: { opacity?: number }) => ({
    alignItems: 'center',
    opacity: props.opacity,
}))

const Content = styled.View((props: bubbleContent) => ({
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
    backgroundColor: props.color,
    alignItems: 'center',
    justifyContent: 'center',
}))
interface bub {
    size: number
}

const Bubble = styled.View<bub>(props => ({
    position: 'relative',
    // top: -0.1,
    width: props.size,
    height: props.size,
    borderWidth: props.size,
    borderTopColor: 'white',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
}))
