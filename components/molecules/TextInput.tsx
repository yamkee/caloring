import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components/native'

import * as Screen from '../../constants/Dimensions'

interface IProps {
    onChange: any
    value: string
    id: string
    secureTextEntry?: boolean
    placeholder?: string
    color?: string
    border?: boolean
    opacity?: number
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
        let isValid = true
        dispatch({ type: INPUT_UPDATE, value: text, isValid: isValid })
    }

    const blurHandler = () => {
        dispatch({ type: INPUT_BLUR })
    }

    return (
        <Input
            onChange={props.onChange}
            id={props.id}
            secureTextEntry={props.secureTextEntry}
            placeholder={props.placeholder}
            style={{ backgroundColor: props.color, opacity: props.opacity }}
            onChangeText={textChangeHandler}
            onBlur={blurHandler}
            value={inputState.value}
        />
    )
}

const Input = styled.TextInput<IProps>(props => ({
    width: Screen.width * 0.92,
    height: Screen.height * 0.06,
    borderRadius: Screen.height * 0.03,
    borderColor: 'grey',
    borderWidth: props.border ? 1 : 0,
    marginBottom: Screen.height * 0.018,
    paddingVertical: '3%',
    paddingHorizontal: '4%',
}))
