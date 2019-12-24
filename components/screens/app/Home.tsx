import React, { useState, useEffect } from 'react'
import { AppState, AppStateStatus, ImageBackground, Alert } from 'react-native'
import { Pedometer } from 'expo-sensors'
import { LinearGradient } from 'expo-linear-gradient'
import SoundPlayer from 'react-native-sound-player'
import styled from 'styled-components/native'
import { useSelector, useDispatch } from 'react-redux'

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
import * as userAction from '../../../store/actions/userData'
import {
    setRealTime,
    updateAsyncStorage,
} from '../../../functions/async-storage'

export default function Home(props: any) {
    let pedometerSubscription: any
    let musicSubscription: any
    const dispatch = useDispatch()
    const [appState, setAppState] = useState(AppState.currentState)
    const [step, setStep] = useState(0)
    const [pastStep, setPastStep] = useState(0)
    const [totalStep, setTotalStep] = useState(0)
    const [weekStep, setWeekStep] = useState()
    const [totalCaloring, setTotalCaloring] = useState(
        useSelector((state: any) => state.userData.totalCaloring)
    )
    const [todayData, setTodayData] = useState()
    const [penalty, setPenalty] = useState(false)
    const userData = useSelector((state: any) => state.userData)
    const { level, penalty: realPenalty } = userData

    useEffect(() => {
        if (pedometerSubscription) {
            pedometerSubscription.remove()
        }
        setRealTime(setPenalty, setTodayData)
        AppState.addEventListener('change', _handleAppStateChange)
        subscribe()
        getStep(setPastStep)
        getWeekStep(setWeekStep)
        soundPlay()
        return function cleanup() {
            AppState.removeEventListener('change', _handleAppStateChange)
        }
    }, [])

    useEffect(() => {
        dispatch(userAction.savePenalty(penalty))
    }, [penalty])

    useEffect(() => {
        setTotalStep(pastStep + step)
    }, [step, pastStep])
    useEffect(() => {
        if (todayData) {
            dispatch(
                userAction.saveData(
                    todayData.name,
                    parseInt(todayData.total_caloring),
                    parseInt(todayData.level),
                    parseInt(todayData.exercising)
                )
            )
        }
    }, [todayData])

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

    const updateTodayExercising = async () => {
        const res = await updateExercising(totalStep, level, totalCaloring)
        dispatch(
            userAction.saveData(
                userData.nickname,
                parseInt(res.total_caloring),
                parseInt(res.level),
                parseInt(res.exercising)
            )
        )
        setTotalCaloring(parseInt(res.total_caloring))
        await updateAsyncStorage(res.total_caloring)

        Alert.alert('운동량 기록', 'Energy가 차오릅니다', [{ text: 'ok' }])
    }

    return (
        <LinearGradient
            colors={colorHandler(realPenalty)}
            style={{
                flex: 1,
            }}
            locations={locationHandler(realPenalty)}
        >
            <ImageBackground
                source={require('../../../assets/background-gif/backGif.gif')}
                style={{ flex: 1 }}
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
                <Button onLongPress={updateTodayExercising}>
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
