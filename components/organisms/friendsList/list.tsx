import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Alert, Modal, ScrollView, Image } from 'react-native'

import dp from '../../../constants/Dp'
import * as screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'
import Text from '../../atoms/Text'
import ListItem from '../../molecules/list-item'
import AttackContent from './attack-content'
import { fetchFriends } from '../../../functions/friend'

export default (props: any) => {
    const [visible, setVisible] = useState(false)
    const [res, setRes] = useState()

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const data = await fetchFriends()
        setRes(data)
        console.log(data)
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
            <ScrollView>
                {res ? (
                    res.response.map((v, i) => (
                        <ListItem
                            key={i}
                            nickname={v.name}
                            level={v.level}
                            todayGage={v.exercising}
                            expGage={v.total_caloring}
                            onPress={() => {
                                setVisible(true)
                            }}
                            onLongPress={() => {
                                Alert.alert('hi', 'h1', [{ text: 'ok' }])
                            }}
                        />
                    ))
                ) : (
                    <></>
                )}
            </ScrollView>
            <Modal transparent={true} visible={visible}>
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
