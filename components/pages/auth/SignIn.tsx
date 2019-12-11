import React, { useEffect } from 'react'
import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    NativeModules,
    Button,
    Alert,
    View,
    Image,
} from 'react-native'
import styled from 'styled-components/native'
import BackgroundTask from 'react-native-background-task'
import RNKakaoLogins from 'react-native-kakao-logins'

import Text from '../../atoms/Text'
import SignBox from '../../organisms/auth/SignBox'
import * as Screen from '../../../constants/Dimensions'

// let test = '11'

// BackgroundTask.define(async () => {
//     test = 'h1'
//     console.log('Hi')
// })

export default function SignIn(props: any) {
    // const statusAsync = async () => {
    //     const status = await BackgroundTask.statusAsync()
    //     console.log(status.available)
    // }

    // useEffect(() => {
    //     BackgroundTask.schedule()
    //     statusAsync()
    // }, [])

    const kakaoLogin = () => {
        RNKakaoLogins.login((err, result) => {
            if (err) {
                Alert.alert('error', err.toString())
                return
            }
            Alert.alert('result', JSON.stringify(result))
        })
    }

    return (
        // <View style={{ backgroundColor: '#A5A0E8', flex: 1 }} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{
                    flex: 1,
                    paddingTop: '3.3%',
                }}
                behavior="position"
                keyboardVerticalOffset={0}
            >
                {/* <Carousel> */}
                {/* <Button
                        title="kakao login"
                        onPress={() => {
                            kakaoLogin()
                        }}
                    /> */}
                <Image source={require('../../../assets/giphy.gif')} />
                {/* </Carousel> */}
                <SignBox
                    navigation={props.navigation}
                    style={{ marginTop: Screen.height * 0.02 }}
                />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
const Wrapper = styled.View({
    flex: 1,
    paddingTop: '3.3%',
})

const Carousel = styled.View({
    width: Screen.width,
    height: Screen.height * 0.59,
    backgroundColor: '#33325d',
})
