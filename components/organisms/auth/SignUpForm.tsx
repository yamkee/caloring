import React, { useState, useEffect } from 'react'
import { Picker, View, CheckBox } from 'react-native'

import * as Screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'
import GenderSelect from '../../molecules/buttons/GenderSelect'
import SignUpInput from '../Input/SignUpInput'
import RoundButton from '../../molecules/buttons/round'
import Button from '../../molecules/buttons/default-button'
import Text from '../../atoms/Text'

export default (props: any) => {
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [formValid, setFormValid] = useState()
    const [agree, setAgree] = useState(false)

    useEffect(() => {
        console.log(age, gender, formValid)
    }, [age, gender, formValid])
    return (
        <View>
            <SignUpInput
                isValid={(isVal: boolean) => setFormValid(isVal)}
                style={{ marginTop: Screen.height * 0.04 }}
            />
            <GenderSelect
                onPress={(gen: string) => {
                    setGender(gen)
                }}
                style={{ marginBottom: Screen.height * 0.047 }}
            />
            <View
                style={{
                    height: Screen.height * 0.059,
                    width: Screen.width * 0.92,
                    borderRadius: (Screen.height * 0.059) / 2,
                    borderWidth: 1,
                    borderColor: Colors.defaultGrey,
                }}
            >
                <Picker
                    selectedValue={age}
                    style={{
                        height: Screen.height * 0.059,
                        width: Screen.width * 0.92,
                        paddingLeft: Screen.width * 0.4,
                    }}
                    onValueChange={value => {
                        setAge(value)
                    }}
                >
                    <Picker.Item label="연령을 선택하여주세요." />
                    <Picker.Item label="10대" value={10} />
                    <Picker.Item label="20대" value={20} />
                    <Picker.Item label="30대" value={30} />
                    <Picker.Item label="40대" value={40} />
                    <Picker.Item label="50대" value={50} />
                </Picker>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: Screen.height * 0.03,
                    marginBottom: Screen.height * 0.01,
                }}
            >
                <CheckBox
                    value={agree}
                    onValueChange={() => {
                        setAgree(prev => !prev)
                    }}
                />
                <Text>다음 사항에 동의합니다.</Text>
            </View>

            <Button
                title="이용약관보기"
                onPress={() => {}}
                textStyle={{ textDecorationLine: 'underline' }}
                style={{
                    alignSelf: 'center',
                    marginBottom: Screen.height * 0.03,
                }}
            />

            <RoundButton
                title="로그인"
                onPress={() => {
                    if (agree && age && gender && formValid) {
                        props.navigation.navigate('Home')
                    }
                }}
                textColor="white"
                color={
                    agree && age && gender && formValid
                        ? Colors.main
                        : '#cbc9c9'
                }
                width={Screen.width * 0.92}
                height={Screen.height * 0.06}
            />
        </View>
    )
}
