import React from 'react'
import styled from 'styled-components/native'

import Header from '../../organisms/friendsList/header'
import Colors from '../../../constants/Colors'
import List from '../../organisms/friendsList/list'

export default function FriendList(props: any) {
    return (
        <Screen>
            <Header navigation={props.navigation} />
            <List />
        </Screen>
    )
}

const Screen = styled.View({
    flex: 1,
    backgroundColor: Colors.main,
})
