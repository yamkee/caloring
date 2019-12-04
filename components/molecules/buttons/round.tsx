import React from 'react'
import styled from 'styled-components/native'

import * as Screen from '../../../constants/Dimensions'
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
    const { title, onPress } = props
    return (
        <Button onPress={onPress} style={props.style} color={props.color}>
            <Text color={props.textColor} level={props.level}>
                {title}
            </Text>
        </Button>
    )
}

const Button = styled.TouchableOpacity<ButtonProps>(props => ({
    width: Screen.width * 0.92,
    height: Screen.height * 0.06,
    borderRadius: Screen.height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props.color,
}))
