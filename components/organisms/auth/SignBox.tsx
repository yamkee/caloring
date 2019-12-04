import React, { useReducer, useEffect, useCallback } from 'react'
import styled from 'styled-components/native'

import TextInput from '../../molecules/TextInput'
import RoundButton from '../../molecules/buttons/round'
import Button from '../../molecules/buttons/default-button'
import * as Screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'

interface FormState {
    values: {
        nickname: string
        password: string
    }
    validities: {
        nickname: boolean
        password: boolean
    }
    formIsValid: boolean
}

interface ActionState {
    type: string
    id: string
    value: string
    isValid: boolean
}

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state: FormState, action: ActionState) => {
    switch (action.type) {
        case FORM_INPUT_UPDATE:
            const updatedValues = { ...state.values, [action.id]: action.value }
            const updatedValidities = {
                ...state.validities,
                [action.id]: action.isValid,
            }

            let count = 0
            let updatedFormIsValid = true
            for (const key in updatedValidities) {
                if (count === 2) break
                updatedFormIsValid =
                    updatedFormIsValid && updatedValidities[key]
                count++
            }
            return {
                value: updatedValues,
                validities: updatedValidities,
                formIsValid: updatedFormIsValid,
            }
        default:
            return state
    }
}

export default function SignBox(props: any) {
    const [formState, dispatch] = useReducer(formReducer, {
        values: {
            nickname: '',
            password: '',
        },
        validities: {
            nickname: false,
            password: false,
        },
        formIsValid: false,
    })

    const onChnageInput = useCallback(
        (id: string, value: string, isValid: boolean) => {
            dispatch({ type: FORM_INPUT_UPDATE, id, value, isValid })
        },
        [dispatch]
    )

    return (
        <Box style={props.style}>
            <TextInput
                id="nickname"
                onChange={onChnageInput}
                value=""
                placeholder="사용자 이름"
            />
            <TextInput
                id="password"
                onChange={onChnageInput}
                value=""
                secureTextEntry
                placeholder="비밀번호"
            />
            <RoundButton
                title="로그인"
                onPress={() => {
                    if (formState.formIsValid) {
                        props.navigation.navigate('Home')
                    }
                }}
                textColor="white"
                color={formState.formIsValid ? Colors.main : '#cbc9c9'}
            />
            <Button
                title="회원가입"
                onPress={() => {
                    props.navigation.navigate('SignUp')
                }}
                style={{ marginTop: Screen.height * 0.023 }}
                textColor={Colors.main}
            />
        </Box>
    )
}

const Box = styled.View({
    justifyContent: 'center',
    alignItems: 'center',
})
