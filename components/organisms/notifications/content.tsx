import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'
import * as screen from '../../../constants/Dimensions'
import dp from '../../../constants/Dp'
import Text from '../../atoms/Text'

export default (props: any) => {
    const alarmData = useSelector((state: any) => state.alarm)
    const [time, setTime] = useState([])
    console.log(alarmData)

    // useEffect(() => {
    //     alarmData.response.map((v, i) => {
    //         if (time[i] !== v.updateAt) {
    //             setTime([...time, v.updateAt])
    //         }
    //     })
    //     console.log(time)
    // }, [time])

    if (!alarmData) {
        return (
            <Wrapper>
                <NoAlarm>
                    <Text>알림 내역이 없습니다.</Text>
                </NoAlarm>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <ScrollView></ScrollView>
            </Wrapper>
        )
    }
}

const Wrapper = styled.View({
    width: screen.width,
    height: screen.height * 0.888,
    backgroundColor: Colors.white,
    borderTopLeftRadius: dp(4.5),
    borderTopRightRadius: dp(4.5),
})

const NoAlarm = styled.View({
    width: screen.width * 0.92,
    height: screen.height * 0.243,
    borderBottomColor: Colors.borderGrey,
    borderBottomWidth: 1,
    marginHorizontal: screen.width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
})
