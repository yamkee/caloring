import React from 'react'
import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native'
import styled from 'styled-components/native'

import SignBox from '../../organisms/auth/SignBox'
import * as Screen from '../../../constants/Dimensions'

export default function SignIn(props: any) {
    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={-10}
            style={{
                flex: 1,
                paddingTop: '3.3%',
            }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                    <Carousel />
                    <SignBox
                        navigation={props.navigation}
                        style={{ marginTop: Screen.height * 0.02 }}
                    />
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const Carousel = styled.View({
    width: Screen.width,
    height: Screen.height * 0.59,
    backgroundColor: '#33325d',
})
