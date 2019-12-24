import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Alert, Modal, ScrollView, Image, RefreshControl } from 'react-native'
import { useSelector } from 'react-redux'

import dp from '../../../constants/Dp'
import * as screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'
import Text from '../../atoms/Text'
import ListItem from '../../molecules/list-item'
import AttackContent from './attack-content'
import {
    fetchFriends,
    deleteFriend,
    attackFriend,
} from '../../../functions/friend'

export default (props: any) => {
    const [visible, setVisible] = useState(false)
    const [res, setRes] = useState()
    const [friendNick, setFriendNick] = useState()
    const [friendId, setFriendId] = useState()
    const exercising = useSelector((state: any) => state.userData.exercising)
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = async () => {
        setRefreshing(true)
        await getData()
        setTimeout(() => {
            setRefreshing(false)
        }, 1000)
    }

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetchFriends()
        setRes(data)
    }
    return (
        <Wrapper>
            <Text
                style={{
                    marginHorizontal: screen.width * 0.044,
                    marginTop: screen.height * 0.023,
                    borderColor: Colors.borderGrey,
                    borderBottomWidth: 1,
                }}
                weight={4}
            >
                친구 목록
            </Text>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {res ? (
                    res.response.map((v, i) => (
                        <ListItem
                            key={i}
                            nickname={v.name}
                            level={v.level}
                            todayGage={v.exercising / 100}
                            expGage={(v.total_caloring % 200) / 200}
                            onPress={() => {
                                setVisible(true)
                                setFriendNick(v.name)
                                setFriendId(v.user_id)
                            }}
                            onLongPress={() => {
                                Alert.alert(
                                    '친구 삭제',
                                    '친구를 삭제하시겠습니까?',
                                    [
                                        {
                                            text: 'ok',
                                            onPress: async () => {
                                                const res = await deleteFriend(
                                                    parseInt(v.user_id)
                                                )
                                                getData()
                                            },
                                        },
                                        { text: 'cancel' },
                                    ]
                                )
                            }}
                        />
                    ))
                ) : (
                    <></>
                )}
            </ScrollView>
            <Modal transparent={true} visible={visible} animationType="fade">
                <AttackWrapper>
                    <Blank
                        onPress={() => {
                            setVisible(false)
                        }}
                    />
                    <AttackBottom>
                        <Circle>
                            <Image
                                source={require('../../../assets/attackIcon.png')}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Circle>
                        <AttackContent
                            nick={friendNick}
                            penalty={exercising}
                            attack={async exercising => {
                                const res = await attackFriend(
                                    friendId,
                                    exercising
                                )
                                console.log(res)
                                if (
                                    res.message === 'warning : already attack'
                                ) {
                                    Alert.alert(
                                        '공격 실패',
                                        '하루에 한번 공격할 수 있습니다',
                                        [{ text: 'ok' }]
                                    )
                                } else {
                                    Alert.alert(
                                        '공격 성공',
                                        `${friendNick}님의 성장 경험치가 ${exercising}%만큼 감소합니다.`,
                                        [{ text: 'ok' }]
                                    )
                                }
                            }}
                            setVisible={(v: boolean) => {
                                setVisible(v)
                            }}
                        />
                    </AttackBottom>
                </AttackWrapper>
            </Modal>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: screen.width,
    height: screen.height * 0.888,
    backgroundColor: Colors.white,
    borderTopLeftRadius: dp(4.5),
    borderTopRightRadius: dp(4.5),
})

const AttackBottom = styled.View({
    width: screen.width,
    height: screen.height * 0.35,
    backgroundColor: 'white',
})

const AttackWrapper = styled.View({
    flex: 1,
    justifyContent: 'flex-end',
})

const Blank = styled.TouchableOpacity({
    width: screen.width,
    height: screen.height * 0.65,
    backgroundColor: 'black',
    opacity: 0.3,
})

const Circle = styled.View({
    position: 'absolute',
    top: -1 * dp(12),
    width: dp(24),
    height: dp(24),
    borderRadius: dp(12),
    alignSelf: 'center',
})
