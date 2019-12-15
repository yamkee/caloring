import React, { useState, useEffect } from 'react'
import { View, Image } from 'react-native'
import { Pedometer } from 'expo-sensors'
import { LinearGradient } from 'expo-linear-gradient'
import SoundPlayer from 'react-native-sound-player'
import { useKeepAwake } from 'expo-keep-awake'

import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'
import Button from '../../molecules/buttons/default-button'

let subscription: any

export default function Home(props: any) {
    const [step, setStep] = useState(0)
    const [start] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const [pastStep, setPastStep] = useState(0)
    const [time, setTime] = useState(0)
    const [
        _onFinishedPlayingSubscription,
        set_onFinishedPlayingSubscription,
    ] = useState(null)

    useKeepAwake()
    useEffect(() => {
        subscribe()
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
        }
    }, [])

    const subscribe = async () => {
        subscription = Pedometer.watchStepCount(result => setStep(result.steps))
    }
    const getStep = async () => {
        const result = await Pedometer.getStepCountAsync(
            new Date(start.setHours(0)),
            end
        )
        console.log(result)
    }
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
            colors={Colors.gradient1}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            locations={[0, 0.7, 1]}
        >
            <Button
                onPress={() => {
                    soundPlay()
                }}
                title="음악 재생"
            />
            <Image source={require('../../../assets/test.gif')} />
            <Text style={{ fontSize: 30 }}>{step} Steps</Text>
            <Button
                onPress={() => {
                    getStep()
                }}
                title="걸음 수 가져오기"
            />
            <Text style={{ fontSize: 30 }}>Total Steps : {pastStep}</Text>
        </LinearGradient>
    )
}

Home.navigationOptions = {
    headerShown: false,
}

// <Text style={{ fontSize: 30 }}>Timer {time}</Text>
//
