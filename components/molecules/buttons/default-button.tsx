import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'

interface ButtonProps {
    onPress: any
    style?: any
    level?: number
    color?: string
    title?: string
    textStyle?: any
    fontWeight?: number
}

export default (props: ButtonProps) => {
    return (
        <Button onPress={props.onPress} style={props.style}>
            <Text
                level={props.level}
                color={props.color}
                style={props.textStyle}
                weight={props.fontWeight}
            >
                {props.title}
            </Text>
        </Button>
    )
}

const Button = styled.TouchableOpacity({})
