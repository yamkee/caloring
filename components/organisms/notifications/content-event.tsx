import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'

export const Penalty = (props: any) => {
    return (
        <Wrapper>
            <Content font="roboto">
                목표치를 달성하지 못하여 패널티를 받았습니다.
            </Content>
            <Number color={Colors.main}>{`-${props.data}`}</Number>
        </Wrapper>
    )
}

export const Attack = (props: any) => {
    return (
        <Wrapper>
            <Content font="roboto">
                {`${props.name}님이 공격하였습니다.`}
            </Content>
            <Number color={Colors.main}>{`-${props.data}`}</Number>
        </Wrapper>
    )
}
export const AddFriend = (props: any) => {
    return (
        <Wrapper>
            <Content font="roboto">
                {`${props.name}님과 친구가 되었습니다.`}
            </Content>
        </Wrapper>
    )
}
export const DeleteFriend = (props: any) => {
    return (
        <Wrapper>
            <Content font="roboto">
                {`${props.name}님이 친구를 삭제하였습니다.`}
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const Content = styled(Text)({})

const Number = styled(Text)({})
