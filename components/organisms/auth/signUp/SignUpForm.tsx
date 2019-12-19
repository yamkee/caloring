import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

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

const Wrapper = styled.View({
    width: screen.width,
    height: screen.height * 0.888,
    backgroundColor: Colors.white,
    borderTopLeftRadius: dp(4.5),
    borderTopRightRadius: dp(4.5),
})

export default (props: any) => {
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [formValid, setFormValid] = useState()
    const [agree, setAgree] = useState(false)
    return (
        <Wrapper>
            <SubTitle />
            <SignUpInput isValid={(isVal: boolean) => setFormValid(isVal)} />
            <GenderSelect
                onPress={(gen: string) => {
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
                onPress={() => {}}
                textStyle={{ textDecorationLine: 'underline' }}
                style={{
                    alignSelf: 'center',
                    marginBottom: screen.height * 0.03,
                }}
            />
            <RoundButton
                title="다음"
                onPress={async () => {
                    if (agree && age && gender && formValid) {
                        await googleFit()
                        props.navigation.navigate('Home')
                    }
                }}
                textColor="white"
                color={
                    agree && age && gender && formValid
                        ? Colors.main
                        : '#cbc9c9'
                }
                width={screen.width * 0.342}
                height={screen.height * 0.055}
                fontWeight={5}
                style={{ alignSelf: 'center' }}
            />
        </Wrapper>
    )
}
