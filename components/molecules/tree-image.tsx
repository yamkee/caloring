import React from 'react'
import { ImageBackground } from 'react-native'
import * as screen from '../../constants/Dimensions'

export default (props: any) => {
    const { level, penalty } = props
    switch (level) {
        case 1:
            if (penalty) {
                return (
                    <ImageBackground
                        source={require('../../assets/penalty/1.png')}
                        style={{
                            width: screen.width,
                            height: (306 * screen.width) / 360,
                        }}
                    >
                        {props.children}
                    </ImageBackground>
                )
            } else {
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
        case 2:
            if (penalty) {
                return (
                    <ImageBackground
                        source={require('../../assets/penalty/2.png')}
                        style={{
                            width: screen.width,
                            height: (306 * screen.width) / 360,
                        }}
                    >
                        {props.children}
                    </ImageBackground>
                )
            } else {
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
            }
        case 3:
            if (penalty) {
                return (
                    <ImageBackground
                        source={require('../../assets/penalty/3.png')}
                        style={{
                            width: screen.width,
                            height: (306 * screen.width) / 360,
                        }}
                    >
                        {props.children}
                    </ImageBackground>
                )
            } else {
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
            }
        case 4:
            if (penalty) {
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
            } else {
                return (
                    <ImageBackground
                        source={require('../../assets/default/4.png')}
                        style={{
                            width: screen.width,
                            height: (306 * screen.width) / 360,
                        }}
                    >
                        {props.children}
                    </ImageBackground>
                )
            }
        default:
            if (penalty) {
                return (
                    <ImageBackground
                        source={require('../../assets/penalty/1.png')}
                        style={{
                            width: screen.width,
                            height: (306 * screen.width) / 360,
                        }}
                    >
                        {props.children}
                    </ImageBackground>
                )
            } else {
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
}
