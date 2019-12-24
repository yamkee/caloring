import React, { useReducer, useCallback, useEffect } from 'react'
import styled from 'styled-components/native'

import TextInput from '../../molecules/SignUpInput'
import * as screen from '../../../constants/Dimensions'

interface FormState {
    values: {
        nickname: string
        password: string
        password2: string
    }
    validities: {
        nickname: boolean
        password: boolean
        password2: boolean
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
                if (key === 'password2') {
                    if (updatedValues.password === updatedValues.password2) {
                        updatedValidities.password = true
                        updatedValidities.password2 = true
                    } else {
                        console.log('diff')
                        updatedValidities.password2 = false
                    }
                }
                console.log(updatedValidities)
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

export default (props: any) => {
    const [formState, dispatch] = useReducer(formReducer, {
        values: {
            nickname: '',
            password: '',
            password2: '',
        },
        validities: {
            nickname: false,
            password: false,
            password2: false,
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
        props.isValid(formState.formIsValid)
        props.getNick(formState.values.nickname)
        props.getPwd(formState.values.password)
    }, [formState])

    return (
        <Wrapper style={props.style}>
            <TextInput
                id="nickname"
                onChange={onChnageInput}
                value=""
                placeholder="사용자 이름"
                errorText="존재하는 닉네임은 사용 가능하지않습니다."
                confirmText="존재하는 닉네임은 사용 가능하지않습니다."
                Text="존재하는 닉네임은 사용 가능하지않습니다."
                isValid
            />
            <TextInput
                id="password"
                onChange={onChnageInput}
                value=""
                secureTextEntry
                placeholder="비밀번호 6자리 이상"
                errorText="비밀번호를 6자리 이상 설정해주세요."
                confirmText="안전한 비밀번호입니다."
                isValid
            />
            <TextInput
                id="password2"
                onChange={onChnageInput}
                value=""
                secureTextEntry
                placeholder="비밀번호 확인"
                confirmText="비밀번호가 일치합니다."
                isValid={formState.validities.password2}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    marginHorizontal: screen.width * 0.02,
})
