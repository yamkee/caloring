import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { googleFit } from '../../../functions/googleFit'

export default function AuthLoading(props: any) {
    useEffect(() => {
        // AsyncStorage.removeItem('userId')
        tokenCheck()
    }, [])

    const tokenCheck = async () => {
        const userToken = await AsyncStorage.getItem('userId')
        if (userToken) {
            await googleFit()
            props.navigation.navigate('App')
        } else {
            props.navigation.navigate('SignIn')
        }
    }

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <ActivityIndicator />
        </View>
    )
}
