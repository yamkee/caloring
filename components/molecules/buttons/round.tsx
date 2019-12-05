import React from 'react'
import styled from 'styled-components/native'

import * as Screen from '../../../constants/Dimensions'
import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'

interface IProps {
    onPress: any
    style?: any
    level?: number
    color?: string
    textColor?: string
    borderColor?: string
    title?: string
    width: number
    height: number
}

interface ButtonProps {
    onPress: any
    style?: any
    color?: string
    borderColor?: string
    width: number
    height: number
}

export default (props: IProps) => {
    const { title, onPress } = props
    return (
        <Button
            onPress={onPress}
            style={props.style}
            color={props.color}
            width={props.width}
            height={props.height}
            borderColor={props.borderColor}
        >
            <Text color={props.textColor} level={props.level}>
                {title}
            </Text>
        </Button>
    )
}

const Button = styled.TouchableOpacity<ButtonProps>(props => ({
    width: props.width,
    height: props.height,
    borderRadius: props.height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props.color,
    borderColor: props.borderColor,
    borderWidth: props.borderColor ? 1 : 0,
}))
