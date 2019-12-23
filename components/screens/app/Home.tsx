import React, { useState, useEffect } from 'react'
import { AppState, AppStateStatus, ImageBackground } from 'react-native'
import { Pedometer } from 'expo-sensors'
import { LinearGradient } from 'expo-linear-gradient'
import SoundPlayer from 'react-native-sound-player'
import styled from 'styled-components/native'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

import Text from '../../atoms/Text'
import { getStep, getWeekStep } from '../../../functions/googleFit'
import { stopPlaying, soundPlay } from '../../../functions/soundPlay'
import Header from '../../organisms/home/header'
import * as screen from '../../../constants/Dimensions'
import ActionButton from '../../molecules/buttons/fab'
import TreeImage from '../../molecules/tree-image'
import TodayStep from '../../organisms/home/today-step'
import Content from '../../organisms/home/content'
import { updateExercising } from '../../../functions/user'
import {
    colorHandler,
    locationHandler,
} from '../../../functions/home-gradient-handler'

let pedometerSubscription: any
let musicSubscription: any

export default function Home(props: any) {
    const [appState, setAppState] = useState(AppState.currentState)
    const [step, setStep] = useState(0)
    const [pastStep, setPastStep] = useState(0)
    const [totalStep, setTotalStep] = useState(0)
    const [weekStep, setWeekStep] = useState()
    const [time, setTime] = useState(0)
    const [totalCaloring, setTotalCaloring] = useState(
        useSelector((state: any) => state.userData.totalCaloring)
    )

    const userData = useSelector((state: any) => state.userData)
    const { level } = userData

    useEffect(() => {
        setRealTime()
        AppState.addEventListener('change', _handleAppStateChange)
        subscribe()
        getStep(setPastStep)
        getWeekStep(setWeekStep)
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

    const setRealTime = async () => {
        try {
            const value = await AsyncStorage.getItem('date')
            if (new Date().getDate().toString() !== value) {
                //fetch
                //날짜 바뀌면 요청보내기
                try {
                    await AsyncStorage.setItem(
                        'date',
                        new Date().getDate().toString()
                    )
                } catch (err) {}
            }
        } catch (err) {}
    }

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
            colors={colorHandler(false)}
            style={{
                flex: 1,
            }}
            locations={locationHandler(false)}
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
                    <TreeImage level={level}>
                        <Content navigation={props.navigation} />
                    </TreeImage>
                </ImageWrapper>
                <TodayStep />
                <Button
                    onPress={async () => {
                        const res = await updateExercising(
                            totalStep,
                            level,
                            totalCaloring
                        )
                    }}
                >
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
                </Button>
                <ActionButton
                    navigation={props.navigation}
                    step={totalStep}
                    weekStep={weekStep}
                />
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
const Button = styled.TouchableOpacity({
    alignSelf: 'center',
    width: '30%',
    alignItems: 'center',
})
