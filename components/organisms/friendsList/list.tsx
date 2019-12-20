import React from 'react'
import styled from 'styled-components/native'

import dp from '../../../constants/Dp'
import * as screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'
import Text from '../../atoms/Text'
import ListItem from '../../molecules/list-item'

export default (props: any) => {
    return (
        <Wrapper>
            <Text>친구 목록</Text>
            <ListItem />
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
