import React from 'react'
import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native'
import styled from 'styled-components/native'

import SignUpForm from '../../organisms/auth/signUp/SignUpForm'
import Colors from '../../../constants/Colors'
import Header from '../../organisms/auth/signUp/Header'

export default function SignUp(props: any) {
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={{ flex: 1 }}
        >
            <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={10}
                style={{
                    flex: 1,
                    backgroundColor: Colors.main,
                }}
            >
                <>
                    <Header navigation={props.navigation} />
                    <SignUpForm navigation={props.navigation} />
                </>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
