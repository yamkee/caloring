import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'

import { googleFit } from '../../../functions/googleFit'
import { autoLogin } from '../../../functions/auth'
import * as userDataAction from '../../../store/actions/userData'

export default function AuthLoading(props: any) {
    const dispatch = useDispatch()

    useEffect(() => {
        AsyncStorage.removeItem('userId')
        tokenCheck()
    }, [])

    const tokenCheck = async () => {
        const userToken = await AsyncStorage.getItem('userId')
        if (userToken) {
            const res = await autoLogin(userToken)
            dispatch(
                userDataAction.saveData(
                    res.name,
                    res.total_caloring,
                    res.level,
                    res.exercising
                )
            )
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
