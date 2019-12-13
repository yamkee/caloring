// import BackgroundTask from 'react-native-background-task'
// import RNKakaoLogins from 'react-native-kakao-logins'
import React, { useEffect, useState } from 'react'
import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    NativeModules,
    Button,
    Alert,
    View,
    Image,
    AppState,
} from 'react-native'
import styled from 'styled-components/native'
// import AsyncStorage from '@react-native-community/async-storage'
// import BackgroundJob from 'react-native-background-job'
import { LinearGradient } from 'expo-linear-gradient'
import { useSelector, useDispatch } from 'react-redux'
// import SoundPlayer from 'react-native-sound-player'

import Text from '../../atoms/Text'
import SignBox from '../../organisms/auth/SignBox'
import * as Screen from '../../../constants/Dimensions'
import * as background from '../../../store/actions/background'
import Colors from '../../../constants/Colors'

// const jobFun = async () => {
//     // await AsyncStorage.setItem('bac', 'please i want background job!!!!!!')
// }
// const backgroundJob = {
//     jobKey: 'myJob',
//     job: () => {
//         jobFun()
//     },
// }

// BackgroundJob.register(backgroundJob)
export default function SignIn(props: any) {
    useEffect(() => {
        // getDataFromStorage()
        // SoundPlayer.onFinishedPlaying((success: boolean) => {
        //     // success is true when the sound is played
        //     console.log('finished playing', success)
        // })
        // return SoundPlayer.unmount()
    }, [])
    // const [back, setBack] = useState()
    // const getDataFromStorage = async () => {
    //     const str = await AsyncStorage.getItem('back')
    //     setBack(str)
    // }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient
                colors={Colors.gradient1}
                style={{ flex: 1 }}
                locations={[0, 0.7, 1]}
            >
                {/* <KeyboardAvoidingView
                        style={{
                            flex: 1,
                        }}
                        behavior="position"
                        keyboardVerticalOffset={0}
                    > */}
                {/* <Button
                    title="backgroud job"
                    onPress={() => {
                        BackgroundJob.schedule({
                            jobKey: 'myJob',
                            allowExecutionInForeground: true,
                        }).then(() => {
                            console.log('success')
                            console.log(AppState.currentState)
                        })
                    }}
                /> */}
                <ImageContainer>
                    <Image source={require('../../../assets/Image1.png')} />
                </ImageContainer>
                <SignBox
                    navigation={props.navigation}
                    style={{ marginTop: Screen.height * 0.02 }}
                />
                {/* </KeyboardAvoidingView> */}
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}
const Wrapper = styled.View({
    flex: 1,
    paddingTop: '3.3%',
})

const ImageContainer = styled.View({
    width: Screen.width,
    height: Screen.height * 0.59,
    alignItems: 'center',
    justifyContent: 'center',
})
