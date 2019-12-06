import React, { useEffect } from 'react'
import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    NativeModules,
} from 'react-native'
import styled from 'styled-components/native'
import BackgroundTask from 'react-native-background-task'

import Text from '../../atoms/Text'
import SignBox from '../../organisms/auth/SignBox'
import * as Screen from '../../../constants/Dimensions'

let test = '11'

BackgroundTask.define(async () => {
    test = 'h1'
    console.log('Hi')
})

export default function SignIn(props: any) {
    const statusAsync = async () => {
        const status = await BackgroundTask.statusAsync()
        console.log(status.available)
    }

    useEffect(() => {
        BackgroundTask.schedule()
        statusAsync()
    }, [])

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{
                    flex: 1,
                    paddingTop: '3.3%',
                }}
                behavior="position"
                keyboardVerticalOffset={0}
            >
                <Carousel>
                    <Text color="white">{test}</Text>
                </Carousel>
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
