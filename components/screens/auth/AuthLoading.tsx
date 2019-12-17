import React, { useEffect } from 'react'
import { View, ActivityIndicator, PermissionsAndroid } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import GoogleFit, { Scopes } from 'react-native-google-fit'

export default function AuthLoading(props: any) {
    useEffect(() => {
        googleFit()
        setTimeout(() => {
            tokenCheck()
        }, 1000)
    }, [])
    const googleFit = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'WALK WITH',
                    message: 'WALK WITH neads access to your location ',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera')
            } else {
                console.log('Camera permission denied')
            }
        } catch (err) {
            console.warn(err)
        }
        const options = {
            scopes: [
                Scopes.FITNESS_ACTIVITY_READ_WRITE,
                Scopes.FITNESS_LOCATION_READ_WRITE,
                Scopes.FITNESS_BODY_READ_WRITE,
            ],
        }
        const authResult = await GoogleFit.authorize(options)
        if (authResult.success) {
            GoogleFit.startRecording(callback => {
                // Process data from Google Fit Recording API (no google fit app needed)
            })
        }
    }
    const tokenCheck = async () => {
        const userToken = await AsyncStorage.getItem('userToken')

        props.navigation.navigate(userToken ? 'App' : 'Auth')
    }

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <ActivityIndicator />
        </View>
    )
}
