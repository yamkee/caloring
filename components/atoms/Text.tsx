import React from 'react'
import styled from 'styled-components/native'

import Dp from '../../constants/Dp'

interface TextProps {
    style?: any
    children: any
    level?: number
    color?: string
}

const fontSizeHandler = (level: number) => {
    switch (level) {
        case 1:
            return Dp(3.5)
        case 2:
            return Dp(6)
        default:
            return Dp(3.5)
    }
}

export default (props: TextProps) => {
    return (
        <Text style={props.style} level={props.level} color={props.color}>
            {props.children}
        </Text>
    )
}

const Text = styled.Text<TextProps>(props => ({
    fontSize: fontSizeHandler(props.level),
    color: props.color,
}))
