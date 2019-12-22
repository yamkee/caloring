import React, { useState } from 'react'
import { TextInput, Button, Alert } from 'react-native'
import styled from 'styled-components/native'

import { findFriends, addFriends } from '../../../functions/friend'

export default (props: any) => {
    const [value, setValue] = useState('')

    return (
        <Wrapper>
            <TextInput
                value={value}
                onChangeText={text => {
                    setValue(text)
                }}
                style={{ borderBottomColor: 'grey', borderBottomWidth: 1 }}
            />
            <Button
                title="친구찾기"
                onPress={async () => {
                    const res = await findFriends(value)
                    if (res.message) {
                        Alert.alert(
                            '존재하지 않는 닉네임입니다',
                            '다시 친구 추가를 해주세요',
                            [{ text: 'ok' }]
                        )
                    } else {
                        const add = await addFriends(parseInt(res.user_id))
                        Alert.alert(
                            '친구가 추가되었습니다',
                            '친구 목록에서 확인해주세요',
                            [{ text: 'ok' }]
                        )
                    }
                    setValue('')
                }}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
})
