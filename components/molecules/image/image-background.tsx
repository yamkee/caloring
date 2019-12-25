import React from 'react'
import { ImageBackground, View } from 'react-native'

export default (props: any) => {
    if (props.penalty) {
        return <View style={{ flex: 1 }}>{props.children}</View>
    } else {
        return (
            <ImageBackground
                source={require('../../../assets/background-gif/backGif.gif')}
                style={{ flex: 1 }}
            >
                {props.children}
            </ImageBackground>
        )
    }
}
