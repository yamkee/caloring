import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import Colors from '../../../constants/Colors'
import Header from '../../organisms/myrecord/header'
import Content from '../../organisms/myrecord/content'
import WeekData from '../../organisms/myrecord/week-data'

export default function MyRecord(props: any) {
    return (
        <Wrapper colors={Colors.recordGradient}>
            <Header navigation={props.navigation} />
            <Content />
            <WeekData />
        </Wrapper>
    )
}

const Wrapper = styled(LinearGradient)({
    flex: 1,
})
