import React, { useState } from 'react'
import {
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native'
import styled from 'styled-components/native'
import { useSelector } from 'react-redux'

import Colors from '../../../constants/Colors'
import Header from '../../organisms/add-friend/header'
import dp from '../../../constants/Dp'
import * as screen from '../../../constants/Dimensions'
import Text from '../../atoms/Text'
import Button from '../../molecules/buttons/default-button'
import { findFriends, addFriends } from '../../../functions/friend'

export default (props: any) => {
    const [value, setValue] = useState('')
    const nickname = useSelector((state: any) => state.userData.nickname)

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={{ flex: 1 }}
        >
            <Wrapper>
                <Header navigation={props.navigation} />
                <Content>
                    <Text
                        style={{
                            borderBottomColor: Colors.borderGrey,
                            borderBottomWidth: 1,

                            marginTop: dp(5.5),
                        }}
                        level={4}
                    >
                        친구 WALK WITH ID
                    </Text>
                    <TextInput
                        value={value}
                        onChangeText={text => {
                            setValue(text)
                        }}
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                        }}
                    />
                    <Text
                        weight={2}
                        style={{ marginTop: dp(2) }}
                    >{`내 ID   ${nickname}`}</Text>
                    <Button
                        title="친구 추가하기"
                        color={Colors.coral}
                        fontWeight={3}
                        level={4}
                        onPress={async () => {
                            const res = await findFriends(value)
                            if (res.message) {
                                Alert.alert(
                                    '존재하지 않는 닉네임입니다',
                                    '다시 친구 추가를 해주세요',
                                    [{ text: 'ok' }]
                                )
                            } else {
                                const add = await addFriends(
                                    parseInt(res.user_id)
                                )
                                Alert.alert(
                                    '친구가 추가되었습니다',
                                    '친구 목록에서 확인해주세요',
                                    [
                                        {
                                            text: 'ok',
                                            onPress: () =>
                                                props.navigation.goBack(),
                                        },
                                    ]
                                )
                            }
                            setValue('')
                        }}
                    />
                </Content>
            </Wrapper>
        </TouchableWithoutFeedback>
    )
}

const Wrapper = styled.View({
    flex: 1,
    backgroundColor: Colors.main,
})

const Content = styled.View({
    width: screen.width,
    height: screen.height * 0.888,
    backgroundColor: Colors.white,
    borderTopLeftRadius: dp(4.5),
    borderTopRightRadius: dp(4.5),
    paddingHorizontal: dp(4),
})
