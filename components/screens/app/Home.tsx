import React, { useState, useEffect } from 'react'
import { Image, AppState, AppStateStatus, ImageBackground } from 'react-native'
import { Pedometer } from 'expo-sensors'
import { LinearGradient } from 'expo-linear-gradient'
import SoundPlayer from 'react-native-sound-player'
import styled from 'styled-components/native'
import { useSelector, useDispatch } from 'react-redux'

import Leaf from '../../atoms/icons/leaf'
import Button from '../../molecules/buttons/default-button'
import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'
import Location from '../../../constants/Location'
import { getStep } from '../../../functions/googleFit'
import { stopPlaying, soundPlay } from '../../../functions/soundPlay'
import Header from '../../organisms/home/header'
import * as screen from '../../../constants/Dimensions'
import ActionButton from '../../molecules/buttons/fab'

let pedometerSubscription: any
let musicSubscription: any

export default function Home(props: any) {
    const [appState, setAppState] = useState(AppState.currentState)
    const [step, setStep] = useState(0)
    const [pastStep, setPastStep] = useState(0)
    const [totalStep, setTotalStep] = useState(0)
    const [time, setTime] = useState(0)
    const [totalCaloring, setTotalCaloring] = useState(
        useSelector((state: any) => state.userData.totalCaloring)
    )
    const dispatch = useDispatch()
    const userData = useSelector((state: any) => state.userData)

    useEffect(() => {
        AppState.addEventListener('change', _handleAppStateChange)
        subscribe()
        getStep(setPastStep)
        soundPlay()
        return function cleanup() {
            pedometerSubscription.remove()
            musicSubscription.remove()
            AppState.removeEventListener('change', _handleAppStateChange)
        }
    }, [])

    useEffect(() => {
        setTotalStep(pastStep + step)
    }, [step, pastStep])

    const subscribe = () => {
        pedometerSubscription = Pedometer.watchStepCount(result =>
            setStep(result.steps)
        )
        musicSubscription = SoundPlayer.addEventListener(
            'FinishedPlaying',
            ({ success }) => {
                if (success) {
                    SoundPlayer.playSoundFile('bgm', 'mp3')
                }
            }
        )
    }

    const _handleAppStateChange = (nextAppState: AppStateStatus) => {
        if (nextAppState === 'background') {
            stopPlaying()
            pedometerSubscription.remove()
            musicSubscription.remove()
        } else if (nextAppState === 'active') {
            getStep(setPastStep)
            soundPlay()
            subscribe()
        }
        setAppState(nextAppState)
    }

    return (
        <LinearGradient
            colors={time % 2 === 0 ? Colors.gradient1 : Colors.gradient2}
            style={{
                flex: 1,
            }}
            locations={time % 2 === 0 ? Location.gradient1 : Location.gradient2}
        >
            <ImageBackground
                source={require('../../../assets/twingkle2.gif')}
                style={{ width: '100%', height: '100%' }}
            >
                <Header
                    energyGage={
                        screen.width * 0.895 * ((totalCaloring % 200) / 200)
                    }
                    totalGage={(screen.width * 0.895 * 250) / 800}
                    energy={totalCaloring % 200}
                    totalCaloring={totalCaloring}
                />
                <Text>{userData.nickname}</Text>
                <ImageWrapper>
                    <Image
                        source={require('../../../assets/main4.png')}
                        style={{ width: 411, height: (306 * 411) / 360 }}
                    />
                </ImageWrapper>
                <Text level={5}>{totalStep}</Text>
                <ActionButton navigation={props.navigation} />
            </ImageBackground>
        </LinearGradient>
    )
}

const ImageWrapper = styled.View({
    width: '100%',
    marginTop: screen.height * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
})
