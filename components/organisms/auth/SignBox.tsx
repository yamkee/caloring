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

            let updatedFormIsValid = true
            for (const key in updatedValidities) {
                updatedFormIsValid =
                    updatedFormIsValid && updatedValidities[key]
            }
            return {
                values: updatedValues,
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
            if (value) {
                dispatch({ type: FORM_INPUT_UPDATE, id, value, isValid })
            }
        },
        [dispatch]
    )

    useEffect(() => {
        // console.table(formState)
    }, [formState])
    return (
        <Box style={props.style}>
            <TextInput
                id="nickname"
                onChange={onChnageInput}
                value=""
                placeholder="사용자 이름"
                color={Colors.white}
            />
            <TextInput
                id="password"
                onChange={onChnageInput}
                value=""
                secureTextEntry
                placeholder="비밀번호"
                color={Colors.white}
            />
            <RoundButton
                title="로그인"
                onPress={() => {
                    if (formState.formIsValid) {
                        props.navigation.navigate('Home')
                    }
                }}
                textColor={formState.formIsValid ? Colors.main : Colors.white}
                color={
                    formState.formIsValid ? Colors.white : Colors.defaultGrey
                }
                width={Screen.width * 0.92}
                height={Screen.height * 0.06}
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
