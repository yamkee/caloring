import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'

import { googleFit } from '../../../functions/googleFit'
import { autoLogin } from '../../../functions/auth'
import * as userDataAction from '../../../store/actions/userData'
import Colors from '../../../constants/Colors'
import Location from '../../../constants/Location'
import * as screen from '../../../constants/Dimensions'
import Leaf from '../../atoms/icons/leaf'
import Text from '../../atoms/Text'

export default function AuthLoading(props: any) {
    const dispatch = useDispatch()

    useEffect(() => {
        AsyncStorage.removeItem('userId')
        setTimeout(() => {
            tokenCheck()
        }, 1500)
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
        <LinearGradient
            style={{ flex: 1, alignItems: 'center' }}
            colors={Colors.orangeGradient}
            locations={Location.orangeGradient}
        >
            <LogoImage source={require('../../../assets/logotext.png')} />
            <LoadingImage
                source={require('../../../assets/loading/loading.png')}
            />
            <Leaf
                width={21.489}
                height={29.706}
                fill="white"
                style={{ marginTop: screen.height * 0.05 }}
            />
            <Text
                color="white"
                font="roboto"
                style={{ marginTop: screen.height * 0.02 }}
            >
                We're loading data
            </Text>
            <Text color="white" font="roboto">
                please wait...
            </Text>
        </LinearGradient>
    )
}

const LogoImage = styled.Image({
    marginBottom: screen.height * 0.05,
    marginTop: screen.height * 0.16,
})
const LoadingImage = styled.Image({
    width: screen.width,
    height: (306 * screen.width) / 360,
})
