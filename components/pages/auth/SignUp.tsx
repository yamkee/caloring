import React from 'react'
import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native'
import styled from 'styled-components/native'

import JoinDesc from '../../organisms/auth/JoinDesc'
import SignUpForm from '../../organisms/auth/SignUpForm'
import * as Screen from '../../../constants/Dimensions'

export default function SignUp(props: any) {
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={{ flex: 1 }}
        >
            <Wrapper>
                <JoinDesc />
                <KeyboardAvoidingView
                    behavior="padding"
                    keyboardVerticalOffset={10}
                >
                    <SignUpForm navigation={props.navigation} />
                </KeyboardAvoidingView>
            </Wrapper>
        </TouchableWithoutFeedback>
    )
}

const Wrapper = styled.View({
    flex: 1,
    paddingHorizontal: Screen.width * 0.039,
    paddingTop: Screen.height * 0.057,
})
