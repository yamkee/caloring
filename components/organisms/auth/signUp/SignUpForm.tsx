import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { useDispatch } from 'react-redux'
import { Alert, Modal } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import * as screen from '../../../../constants/Dimensions'
import Colors from '../../../../constants/Colors'
import GenderSelect from '../../../molecules/buttons/GenderSelect'
import SignUpInput from '../../Input/SignUpInput'
import RoundButton from '../../../molecules/buttons/round'
import Button from '../../../molecules/buttons/default-button'
import dp from '../../../../constants/Dp'
import SubTitle from './SubTitle'
import AgePicker from '../../../molecules/AgePicker'
import Checkbox from '../../../molecules/checkboxs/default-checkbox'
import { googleFit } from '../../../../functions/googleFit'
import { signUp } from '../../../../functions/auth'
import * as userDataAction from '../../../../store/actions/userData'
import TermsOfUse from './terms-of-use'

const Wrapper = styled.View({
    width: screen.width,
    height: screen.height * 0.888,
    backgroundColor: Colors.white,
    borderTopLeftRadius: dp(4.5),
    borderTopRightRadius: dp(4.5),
})

export default (props: any) => {
    const [age, setAge] = useState()
    const [gender, setGender] = useState(2)
    const [formValid, setFormValid] = useState()
    const [agree, setAgree] = useState(false)
    const [nickname, setNickname] = useState()
    const [password, setPassword] = useState()
    const [modalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()

    const next = async () => {
        if (agree && age && gender !== 2 && formValid) {
            const userData = await signUp({
                nickname,
                password,
                age,
                gender,
            })
            if (userData.message) {
                Alert.alert('닉네임중복', '다른 닉네임을 사용해주세요', [
                    {
                        text: 'OK',
                    },
                ])
            } else {
                dispatch(
                    userDataAction.saveData(
                        nickname,
                        parseInt(userData.total_caloring),
                        parseInt(userData.level),
                        parseInt(userData.exercising)
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
                    await AsyncStorage.setItem(
                        `total`,
                        userData.total_caloring.toString()
                    )
                } catch (error) {
                    // Error saving data
                }
                await googleFit()
                props.navigation.navigate('Home')
            }
        }
    }

    const termsOfUse = () => {
        setModalVisible(true)
    }

    return (
        <Wrapper>
            <SubTitle />
            <SignUpInput
                isValid={(isVal: boolean) => setFormValid(isVal)}
                getNick={nick => setNickname(nick)}
                getPwd={pwd => setPassword(pwd)}
            />
            <GenderSelect
                onPress={(gen: number) => {
                    setGender(gen)
                }}
                style={{ marginBottom: screen.height * 0.047 }}
            />
            <AgePicker setAge={age => setAge(age)} />
            <Checkbox
                setAgree={agree => setAgree(agree)}
                title="다음 사항에 동의합니다."
            />
            <Button
                title="이용약관보기"
                onPress={termsOfUse}
                textStyle={{ textDecorationLine: 'underline' }}
                style={{
                    alignSelf: 'center',
                    marginBottom: screen.height * 0.03,
                }}
            />
            <RoundButton
                title="다음"
                onPress={next}
                textColor="white"
                color={
                    agree && age && gender !== 2 && formValid
                        ? Colors.main
                        : '#cbc9c9'
                }
                width={screen.width * 0.342}
                height={screen.height * 0.055}
                fontWeight={5}
                style={{ alignSelf: 'center' }}
            />
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <TermsOfUse setVisible={bool => setModalVisible(bool)} />
            </Modal>
        </Wrapper>
    )
}
