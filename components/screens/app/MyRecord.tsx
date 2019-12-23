import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import Colors from '../../../constants/Colors'
import Header from '../../organisms/myrecord/header'
import Content from '../../organisms/myrecord/content'
import WeekData from '../../organisms/myrecord/week-data'

let weekStep = new Array()

export default function MyRecord(props: any) {
    const step = props.navigation.getParam('step')
    const weekData = props.navigation.getParam('weekStep')
    const [dateInfo, setDateInfo] = useState()

    const weekDataHandler = useCallback(
        weekData => {
            if (weekData.length > 7) {
                setDateInfo(weekData[1].date.split('-'))
                weekData.map((data, index) => {
                    if (index > 0) {
                        weekStep[index - 1] = data.value
                    }
                })
            } else {
                setDateInfo(weekData[0].date.split('-'))
                weekData.map((data, index) => {
                    weekStep[index] = data.value
                })
            }
        },
        [weekData]
    )
    useEffect(() => {
        weekDataHandler(weekData)
    }, [])

    return (
        <Wrapper colors={Colors.recordGradient}>
            <Header navigation={props.navigation} />
            <Content step={step} />
            <WeekData startDate={dateInfo} weekStep={weekStep} />
        </Wrapper>
    )
}

const Wrapper = styled(LinearGradient)({
    flex: 1,
})
