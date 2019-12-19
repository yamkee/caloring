import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { googleFit } from '../../../functions/googleFit'

export default function AuthLoading(props: any) {
    useEffect(() => {
        tokenCheck()
    }, [])

    const tokenCheck = async () => {
        const userToken = await AsyncStorage.getItem('userToken')
        await googleFit()
        props.navigation.navigate(!userToken ? 'App' : 'SignIn')
    }

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <ActivityIndicator />
        </View>
    )
}
