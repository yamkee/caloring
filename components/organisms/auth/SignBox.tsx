import React, { useReducer, useCallback } from 'react'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-community/async-storage'

import TextInput from '../../molecules/TextInput'
import RoundButton from '../../molecules/buttons/round'
import Button from '../../molecules/buttons/default-button'
import * as Screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'
import { googleFit } from '../../../functions/googleFit'
import { logIn } from '../../../functions/auth'
import * as userDataAction from '../../../store/actions/userData'

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
    const mainDispatch = useDispatch()
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

    return (
        <Box style={props.style}>
            <TextInput
                id="nickname"
                onChange={onChnageInput}
                value=""
                placeholder="사용자 이름"
                color={Colors.white}
                opacity={0.59}
            />
            <TextInput
                id="password"
                onChange={onChnageInput}
                value=""
                secureTextEntry
                placeholder="비밀번호"
                color={Colors.white}
                opacity={0.59}
            />
            <RoundButton
                title="로그인"
                onPress={async () => {
                    if (formState.formIsValid) {
                        const userData = await logIn({
                            nickname: formState.values.nickname,
                            password: formState.values.password,
                        })
                        if (userData.message) {
                            Alert.alert(
                                '로그인 실패',
                                '아이디와 비밀번호를 확인해주세요',
                                [{ text: 'ok' }]
                            )
                        } else {
                            mainDispatch(
                                userDataAction.saveData(
                                    formState.values.nickname,
                                    userData.total_caloring,
                                    userData.level,
                                    userData.exercising
                                )
                            )
                            try {
                                await AsyncStorage.setItem(
                                    'userId',
                                    userData.user_id.toString()
                                )
                                await AsyncStorage.setItem(
                                    'date',
                                    new Date().getDate().toString()
                                )
                            } catch (error) {
                                // Error saving data
                            }
                            await googleFit()
                            props.navigation.navigate('Home')
                        }
                    }
                }}
                textColor={
                    formState.formIsValid ? Colors.defaultGrey : Colors.white
                }
                color={formState.formIsValid ? Colors.white : '#b5b5b5'}
                width={Screen.width * 0.92}
                height={Screen.height * 0.06}
            />
            <Button
                title="회원가입"
                onPress={() => {
                    props.navigation.navigate('SignUp')
                }}
                style={{ marginTop: Screen.height * 0.023, elevation: 9 }}
                color={Colors.white}
            />
        </Box>
    )
}

const Box = styled.View({
    justifyContent: 'center',
    alignItems: 'center',
})
