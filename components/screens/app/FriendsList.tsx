import React, { useState, useEffect } from 'react'
import { View, Dimensions, PixelRatio } from 'react-native'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import * as screen from '../../../constants/Dimensions'

export default function FriendList(props: any) {
    return (
        <Screen>
            <Header />
            <List></List>
        </Screen>
    )
}

const Screen = styled.View({
    flex: 1,
})

const Header = styled.View({
    width: screen.width,
    height: screen.height * 0.1,
    backgroundColor: '#f67280',
})

const List = styled.View({
    width: screen.width,
    height: screen.height * 0.9,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
})
