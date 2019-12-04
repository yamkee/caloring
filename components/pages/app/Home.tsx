import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Pedometer } from 'expo-sensors'

import Text from '../../atoms/Text'

let subscription: any

export default function Home(props: any) {
    const [step, setStep] = useState(0)
    const [pastStep, setPastStep] = useState(0)

    useEffect(() => {
        subscribe()
        return subscription.remove()
    }, [])

    const subscribe = async () => {
        subscription = Pedometer.watchStepCount(result => setStep(result.steps))
    }
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text style={{ fontSize: 30 }}>{step} Steps</Text>
            <Text style={{ fontSize: 30 }}>Total Steps : {pastStep}</Text>
        </View>
    )
}
