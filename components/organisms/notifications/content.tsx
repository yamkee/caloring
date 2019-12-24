import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'
import * as screen from '../../../constants/Dimensions'
import dp from '../../../constants/Dp'
import Text from '../../atoms/Text'
import ContentDate from './content-date'
import Event from './content-event'
import { ScrollView } from 'react-native-gesture-handler'

export default (props: any) => {
    const alarmData = useSelector((state: any) => state.alarm)
    console.log(alarmData)

    if (alarmData.response.length === 0) {
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
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: screen.width * 0.04,
                        paddingBottom: screen.height * 0.05,
                    }}
                >
                    {alarmData.response.map((v, i) => {
                        if (i === 0) {
                            return (
                                <Content key={-i}>
                                    <ContentDate
                                        key={i}
                                        date={v.updateAt.split('-')}
                                    />
                                    <Event
                                        key={v.name + v.event + i}
                                        name={v.name}
                                        event={v.event}
                                        caloring={v.caloring}
                                    />
                                </Content>
                            )
                        } else {
                            if (
                                alarmData.response[i - 1].updateAt !==
                                v.updateAt
                            ) {
                                return (
                                    <Content key={-i}>
                                        <ContentDate
                                            key={i}
                                            date={v.updateAt.split('-')}
                                        />
                                        <Event
                                            key={v.name + v.event + i}
                                            name={v.name}
                                            event={v.event}
                                            caloring={v.caloring}
                                        />
                                    </Content>
                                )
                            } else {
                                return (
                                    <Content key={-i}>
                                        <Event
                                            key={v.name + v.event + i}
                                            name={v.name}
                                            event={v.event}
                                            caloring={v.caloring}
                                        />
                                    </Content>
                                )
                            }
                        }
                    })}
                </ScrollView>
            </Wrapper>
        )
    }
}

const Wrapper = styled.View({
    width: screen.width,
    height: screen.height * 0.89,
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
    paddingHorizontal: screen.width * 0.04,
})

const Content = styled.View({})
