import React from 'react'
import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    View,
} from 'react-native'
import styled from 'styled-components/native'

import SignUpForm from '../../organisms/auth/SignUpForm'
import * as screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'
import Header from '../../organisms/auth/signUp/Header'

const Roboto = styled.Text`
    font-size: 30;
    font-family: 'Roboto-Black';
    background-color: white;
`

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
                    <Roboto>roboto black</Roboto>
                    {/* <JoinDesc />
                    <SignUpForm navigation={props.navigation} /> */}
                </>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
