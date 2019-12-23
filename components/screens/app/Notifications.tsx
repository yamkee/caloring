import React from 'react'
import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'
import Header from '../../organisms/notifications/header'
import Content from '../../organisms/notifications/content'

export default function Notifications(props: any) {
    return (
        <Wrapper>
            <Header navigation={props.navigation} />
            <Content />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    flex: 1,
    backgroundColor: Colors.main,
})
