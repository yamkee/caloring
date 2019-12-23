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
import * as screen from '../../../constants/Dimensions'
import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'
import dpHandler from '../../../constants/Dp'

export default function SignIn(props: any) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={Colors.gradient0} style={{ flex: 1 }}>
                <KeyboardAvoidingView
                    style={{
                        flex: 1,
                    }}
                    behavior="position"
                    keyboardVerticalOffset={0}
                >
                    <ImageContainer>
                        <Image
                            source={require('../../../assets/login/login.png')}
                        />
                        <LogoContainer>
                            <Image
                                source={require('../../../assets/logotext.png')}
                            />
                        </LogoContainer>
                    </ImageContainer>

                    <SignBox
                        navigation={props.navigation}
                        style={{ marginTop: screen.height * 0.02 }}
                    />
                </KeyboardAvoidingView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}

const ImageContainer = styled.View({
    width: screen.width,
    height: screen.height * 0.59,
    paddingBottom: screen.height * 0.05,
    alignItems: 'center',
    justifyContent: 'flex-end',
})

const LogoContainer = styled.View({
    marginTop: screen.height * 0.05,
})
