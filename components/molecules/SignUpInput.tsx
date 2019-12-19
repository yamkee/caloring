import React, { useReducer, useEffect } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import * as Screen from '../../constants/Dimensions'
import Text from '../atoms/Text'
import Colors from '../../constants/Colors'
import dp from '../../constants/Dp'

interface IProps {
    onChange: any
    value: string
    id: string
    secureTextEntry?: boolean
    placeholder?: string
    errorText?: string
    confirmText?: string
    isSignUp?: boolean
    isValid?: boolean
}

interface InputState {
    value: string
    isValid: boolean
    touched: boolean
}

interface ActionState {
    type: string
    value?: string
    isValid?: boolean
}

const INPUT_UPDATE = 'INPUT_UPDATE'
const INPUT_BLUR = 'INPUT_BLUR'

const inputReducer = (state: InputState, action: ActionState) => {
    switch (action.type) {
        case INPUT_UPDATE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid,
            }
        case INPUT_BLUR:
            return {
                ...state,
                touched: true,
            }
        default:
            return state
    }
}

export default (props: IProps) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.value ? props.value : '',
        isValid: false,
        touched: false,
    })
    const { onChange, id } = props

    useEffect(() => {
        if (inputState.touched) {
            onChange(id, inputState.value, inputState.isValid)
        }
    }, [onChange, id, inputState])

    const textChangeHandler = (text: string) => {
        let isValid = false
        if (id === 'nickname') {
            //디비에서 존재하는 닉네임인지 확인하여 isValid설정
            isValid = true
        } else if (id === 'password') {
            if (text.length >= 6) isValid = true
        } else if (id === 'password2') {
            if (text.length >= 6) isValid = true
            console.log(props.isValid)
        }
        dispatch({ type: INPUT_UPDATE, value: text, isValid: isValid })
    }

    const blurHandler = () => {
        dispatch({ type: INPUT_BLUR })
    }
    const confrimHandler = () => {
        if (inputState.touched && !inputState.isValid) {
            return (
                <ConfirmTextContainer>
                    <Text color={Colors.error} level={1}>
                        {props.errorText}
                    </Text>
                </ConfirmTextContainer>
            )
        } else if (inputState.touched && inputState.isValid && props.isValid) {
            return (
                <ConfirmTextContainer>
                    <Text color={Colors.defaultGrey} level={1}>
                        {props.confirmText}
                    </Text>
                </ConfirmTextContainer>
            )
        } else {
            return <ConfirmTextContainer />
        }
    }
    return (
        <Wrapper>
            <TextInput
                {...props}
                onChangeText={textChangeHandler}
                onBlur={blurHandler}
                value={inputState.value}
            />
            {confrimHandler()}
        </Wrapper>
    )
}

const Wrapper = styled.View({})
const TextInput = styled.TextInput<IProps>(props => ({
    width: Screen.width * 0.95,
    height: Screen.height * 0.056,
    borderRadius: Screen.height * 0.03,
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: '3%',
    paddingHorizontal: '4%',
    fontSize: dp(3),
}))

const ConfirmTextContainer = styled.View({
    width: '100%',
    height: Screen.height * 0.047,
    paddingHorizontal: '4%',
    justifyContent: 'center',
})
