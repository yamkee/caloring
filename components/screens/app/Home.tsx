import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Pedometer } from 'expo-sensors'
import { LinearGradient } from 'expo-linear-gradient'

import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'
import Button from '../../molecules/buttons/default-button'

let subscription: any

export default function Home(props: any) {
    const [step, setStep] = useState(0)
    const [pastStep, setPastStep] = useState(0)
    const [time, setTime] = useState(0)

    useEffect(() => {
        subscribe()
        return subscription.remove()
    }, [])

    const subscribe = async () => {
        subscription = Pedometer.watchStepCount(result => setStep(result.steps))
    }

    return (
        <LinearGradient
            colors={Colors.gradient1}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            locations={[0, 0.7, 1]}
        >
            <Button onPress={() => {}} title="음악 재생" />
        </LinearGradient>
    )
}

Home.navigationOptions = {
    headerShown: false,
}

// <Text style={{ fontSize: 30 }}>Timer {time}</Text>
//             <Text style={{ fontSize: 30 }}>{step} Steps</Text>
//             <Text style={{ fontSize: 30 }}>Total Steps : {pastStep}</Text>
