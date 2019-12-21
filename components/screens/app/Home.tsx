import React, { useState, useEffect } from 'react'
import { Image, AppState, AppStateStatus, ImageBackground } from 'react-native'
import { Pedometer } from 'expo-sensors'
import { LinearGradient } from 'expo-linear-gradient'
import SoundPlayer from 'react-native-sound-player'
import styled from 'styled-components/native'
import { useSelector, useDispatch } from 'react-redux'

import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'
import Location from '../../../constants/Location'
import { getStep } from '../../../functions/googleFit'
import { stopPlaying, soundPlay } from '../../../functions/soundPlay'
import Header from '../../organisms/home/header'
import * as screen from '../../../constants/Dimensions'
import ActionButton from '../../molecules/buttons/fab'
import TreeImage from '../../molecules/tree-image'
import TodayStep from '../../organisms/home/today-step'
import Content from '../../organisms/home/content'

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
    const { level } = userData

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
            colors={['#62a9b2', '#b2bdbb', '#d1c5be', '#bfc2bd', '#8ebabb']}
            style={{
                flex: 1,
            }}
            locations={[0, 0.34, 0.58, 0.77, 1]}
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
                <ImageWrapper>
                    <TreeImage level={4}>
                        <Content navigation={props.navigation} />
                    </TreeImage>
                </ImageWrapper>
                <TodayStep />
                <Text
                    level={6}
                    style={{
                        alignSelf: 'center',
                    }}
                    color="white"
                    font="roboto"
                >
                    {totalStep}
                </Text>
                <ActionButton navigation={props.navigation} />
            </ImageBackground>
        </LinearGradient>
    )
}

const ImageWrapper = styled.View({
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: screen.height * 0.1,
})
