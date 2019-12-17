import React, { useState, useEffect, useCallback } from 'react'
import { View, Image, AppState, Animated } from 'react-native'
import { Pedometer } from 'expo-sensors'
import { LinearGradient } from 'expo-linear-gradient'
import SoundPlayer from 'react-native-sound-player'
import GoogleFit from 'react-native-google-fit'

import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'
import Button from '../../molecules/buttons/default-button'
import Location from '../../../constants/Location'
import * as Dimension from '../../../constants/Dimensions'

let subscription: any

export default function Home(props: any) {
    const [appState, setAppState] = useState(AppState.currentState)
    const [step, setStep] = useState(0)
    const [start] = useState(new Date())
    const [pastStep, setPastStep] = useState(0)
    const [totalStep, setTotalStep] = useState(0)
    const [
        _onFinishedPlayingSubscription,
        set_onFinishedPlayingSubscription,
    ] = useState(null)
    const [time, setTime] = useState(0)

    useEffect(() => {
        AppState.addEventListener('change', _handleAppStateChange)
        subscribe()
        getStep()
        set_onFinishedPlayingSubscription(
            SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
                if (success) {
                    SoundPlayer.playSoundFile('i', 'mp3')
                }
            })
        )
        return function cleanup() {
            subscription.remove()
            _onFinishedPlayingSubscription.remove()
            AppState.removeEventListener('change', _handleAppStateChange)
        }
    }, [])

    useEffect(() => {
        setTotalStep(pastStep + step)
    }, [step, pastStep])

    const _handleAppStateChange = nextAppState => {
        if (
            appState.match(/inactive|background/) &&
            nextAppState === 'active'
        ) {
            subscription.remove()
            subscribe()
        }
        setAppState(nextAppState)
    }

    const subscribe = async () => {
        subscription = Pedometer.watchStepCount(result => setStep(result.steps))
    }

    const getStep = useCallback(async () => {
        const options = {
            startDate: new Date(
                start.setDate(start.getDate() - 2)
            ).toISOString(), // required ISO8601Timestamp
            endDate: new Date().toISOString(), // required ISO8601Timestamp
        }
        GoogleFit.getDailyStepCountSamples(options, (isError, result) => {
            if (!isError) {
                console.log(result)
                result.map(res => {
                    if (
                        res.source === 'com.google.android.gms:estimated_steps'
                    ) {
                        const ldx = res.steps.length
                        if (ldx === 0) {
                        } else {
                            setPastStep(res.steps[ldx - 1].value)
                        }
                    }
                })
            } else {
                console.log(isError)
            }
        })
    }, [setPastStep])

    const soundPlay = () => {
        try {
            SoundPlayer.playSoundFile('i', 'mp3')
        } catch (e) {
            alert('Cannot play the file')
            console.log('cannot play the song file', e)
        }
    }

    return (
        <LinearGradient
            colors={time % 2 === 0 ? Colors.gradient1 : Colors.gradient2}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            locations={time % 2 === 0 ? Location.gradient1 : Location.gradient2}
        >
            <Button
                onPress={() => {
                    // soundPlay()
                    setTime(prev => prev + 1)
                }}
                title="색 바꾸기"
            />
            <Image source={require('../../../assets/test.gif')} />
            <Text style={{ fontSize: 30 }}>{totalStep} Steps</Text>
            <Text style={{ fontSize: 30 }}>Past Steps : {pastStep}</Text>
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
