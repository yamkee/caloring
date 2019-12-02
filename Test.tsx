import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Pedometer } from 'expo-sensors'

let subscription: any

export default function PedoTest(props: any) {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking')
    const [pastStepCount, setPastStepCount] = useState(0)
    const [currentStepCount, setCurrentStepCount] = useState(0)

    useEffect(() => {
        subscribe()
        return () => {
            subscription.remove()
        }
    }, [])

    const subscribe = () => {
        subscription = Pedometer.watchStepCount(result => {
            setCurrentStepCount(result.steps)
        })
        console.log(subscription)

        Pedometer.isAvailableAsync().then(
            result => {
                setIsPedometerAvailable(String(result))
            },
            error => {
                setIsPedometerAvailable(
                    'Could not get isPedometerAvailable: ' + error
                )
            }
        )

        const end = new Date()
        const start = new Date()

        start.setDate(end.getDate() - 1)
        Pedometer.getStepCountAsync(start, end).then(
            result => {
                setPastStepCount(result.steps)
            },
            error => {
                console.log(start)
                console.log(end)
                setPastStepCount(-1)
            }
        )
    }
    return (
        <View style={styles.container}>
            <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
            <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
            <Text>Walk! And watch this go up: {currentStepCount}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
