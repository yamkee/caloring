import React, { useState, useEffect } from 'react'
import { Image, AppState, AppStateStatus } from 'react-native'
import { Pedometer } from 'expo-sensors'
import { LinearGradient } from 'expo-linear-gradient'
import SoundPlayer from 'react-native-sound-player'

import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'
import Button from '../../molecules/buttons/default-button'
import Location from '../../../constants/Location'
import { getStep } from '../../../functions/googleFit'
import { stopPlaying, soundPlay } from '../../../functions/soundPlay'
import Header from '../../organisms/home/header'
import * as screen from '../../../constants/Dimensions'

let pedometerSubscription: any
let musicSubscription: any

export default function Home(props: any) {
    const [appState, setAppState] = useState(AppState.currentState)
    const [step, setStep] = useState(0)
    const [pastStep, setPastStep] = useState(0)
    const [totalStep, setTotalStep] = useState(0)
    const [time, setTime] = useState(0)

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
                    SoundPlayer.playSoundFile('i', 'mp3')
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
            <Header
                todayGage={screen.width * 0.895 * (totalStep / 10000)}
                totalGage={screen.width * 0.895}
                todayStep={totalStep}
                totalCaloring={100}
            />
            <Text style={{ fontSize: 30 }}>{totalStep} Steps</Text>
            <Button
                onPress={() => {
                    props.navigation.navigate('FriendList')
                }}
                title="친구 목록 보기"
            />
            <Button
                onPress={() => {
                    props.navigation.navigate('MyRecord')
                }}
                title="기록 보기"
            />
            <Button
                onPress={() => {
                    props.navigation.navigate('Notifications')
                }}
                title="알림 보기"
            />
        </LinearGradient>
    )
}
