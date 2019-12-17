import React from 'react'
import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Image,
} from 'react-native'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import SignBox from '../../organisms/auth/SignBox'
import * as Screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'

export default function SignIn(props: any) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient
                colors={Colors.gradient1}
                style={{ flex: 1 }}
                locations={[0, 0.7, 1]}
            >
                <KeyboardAvoidingView
                    style={{
                        flex: 1,
                    }}
                    behavior="position"
                    keyboardVerticalOffset={0}
                >
                    <ImageContainer>
                        <Image source={require('../../../assets/Image1.png')} />
                    </ImageContainer>
                    <SignBox
                        navigation={props.navigation}
                        style={{ marginTop: Screen.height * 0.02 }}
                    />
                </KeyboardAvoidingView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}

const ImageContainer = styled.View({
    width: Screen.width,
    height: Screen.height * 0.59,
    paddingBottom: Screen.height * 0.077,
    alignItems: 'center',
    justifyContent: 'flex-end',
})
