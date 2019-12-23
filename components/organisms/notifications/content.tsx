import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'
import * as screen from '../../../constants/Dimensions'
import dp from '../../../constants/Dp'
import Text from '../../atoms/Text'
import ContentDate from './content-date'
import { Penalty, Attack, AddFriend, DeleteFriend } from './content-event'

export default (props: any) => {
    const alarmData = useSelector((state: any) => state.alarm)
    const [time, setTime] = useState([])
    console.log(alarmData)

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
                <ScrollView>
                    {alarmData.response.map((v, i) => {
                        if (i === 0) {
                            return (
                                <Content key={-i}>
                                    <ContentDate
                                        key={i}
                                        date={v.updateAt.split('-')}
                                    />
                                    {v.event === 0 ? (
                                        <Penalty
                                            key={v.event + v.name + i}
                                            data={v.caloring}
                                        />
                                    ) : v.event === 1 ? (
                                        <Attack
                                            data={v.caloring}
                                            name={v.name}
                                        />
                                    ) : v.evnet === 2 ? (
                                        <AddFriend
                                            key={v.event + v.name + i}
                                            name={v.name}
                                        />
                                    ) : (
                                        <DeleteFriend
                                            key={v.event + v.name + i}
                                            name={v.name}
                                        />
                                    )}
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
                                        {v.event === 0 ? (
                                            <Penalty
                                                key={v.event + v.name + i}
                                                data={v.caloring}
                                            />
                                        ) : v.event === 1 ? (
                                            <Attack
                                                key={v.event + v.name + i}
                                                data={v.caloring}
                                                name={v.name}
                                            />
                                        ) : v.event === 2 ? (
                                            <AddFriend
                                                key={v.event + v.name + i}
                                                name={v.name}
                                            />
                                        ) : (
                                            <DeleteFriend
                                                key={v.event + v.name + i}
                                                name={v.name}
                                            />
                                        )}
                                    </Content>
                                )
                            } else {
                                return (
                                    <Content key={-i}>
                                        {v.event === 0 ? (
                                            <Penalty
                                                key={v.event + v.name + i}
                                                data={v.caloring}
                                            />
                                        ) : v.event === 1 ? (
                                            <Attack
                                                key={v.event + v.name + i}
                                                data={v.caloring}
                                                name={v.name}
                                            />
                                        ) : v.event === 2 ? (
                                            <AddFriend
                                                key={v.event + v.name + i}
                                                name={v.name}
                                            />
                                        ) : (
                                            <DeleteFriend
                                                key={v.event + v.name + i}
                                                name={v.name}
                                            />
                                        )}
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
    paddingHorizontal: screen.width * 0.04,
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

const Content = styled.View({})
