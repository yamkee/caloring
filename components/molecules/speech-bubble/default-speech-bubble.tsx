import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'

type bubbleContent = {
    borderRadius: number
    color: string
}

export default (props: any) => {
    const { borderRadius, color, opacity, bottom, text } = props

    return (
        <Wrapper opacity={opacity}>
            <Content borderRadius={borderRadius} color={color}>
                <Text font="roboto" color="black">
                    {text}
                </Text>
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
    borderRadius: props.borderRadius,
    backgroundColor: props.color,
    alignItems: 'center',
    paddingHorizontal: '4%',
    paddingVertical: '5%',
}))
interface bub {
    size: number
}

const Bubble = styled.View<bub>(props => ({
    position: 'relative',
    top: -0.1,
    width: props.size,
    height: props.size,
    borderWidth: props.size,
    borderTopColor: 'white',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
}))
