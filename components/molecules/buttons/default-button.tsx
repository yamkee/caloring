import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'

interface ButtonProps {
    onPress: any
    style?: any
    level?: number
    color?: string
    textColor?: string
    title?: string
}

export default (props: ButtonProps) => {
    return (
        <Button onPress={props.onPress} style={props.style}>
            <Text level={props.level} color={props.textColor}>
                {props.title}
            </Text>
        </Button>
    )
}

const Button = styled.TouchableOpacity({})