import React from 'react'
import { ImageBackground } from 'react-native'
import * as screen from '../../constants/Dimensions'

export default (props: any) => {
    const { level } = props
    switch (level) {
        case 1:
            return (
                <ImageBackground
                    source={require('../../assets/default/1.png')}
                    style={{
                        width: screen.width,
                        height: (306 * screen.width) / 360,
                    }}
                >
                    {props.children}
                </ImageBackground>
            )
        case 2:
            return (
                <ImageBackground
                    source={require('../../assets/default/2.png')}
                    style={{
                        width: screen.width,
                        height: (306 * screen.width) / 360,
                    }}
                >
                    {props.children}
                </ImageBackground>
            )
        case 3:
            return (
                <ImageBackground
                    source={require('../../assets/default/3.png')}
                    style={{
                        width: screen.width,
                        height: (306 * screen.width) / 360,
                    }}
                >
                    {props.children}
                </ImageBackground>
            )
        case 4:
            return (
                <ImageBackground
                    source={require('../../assets/penalty/4.png')}
                    style={{
                        width: screen.width,
                        height: (306 * screen.width) / 360,
                    }}
                >
                    {props.children}
                </ImageBackground>
            )
        default:
            return (
                <ImageBackground
                    source={require('../../assets/default/1.png')}
                    style={{
                        width: screen.width,
                        height: (306 * screen.width) / 360,
                    }}
                >
                    {props.children}
                </ImageBackground>
            )
    }
}
