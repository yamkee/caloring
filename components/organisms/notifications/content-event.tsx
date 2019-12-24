import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'

const PENALTY = '목표치를 달성하지 못하여 패널티를 받았습니다.'
const ATTACK = '님이 공격하였습니다.'
const ADD = '님과 친구가 되었습니다'
const DELETE = '님이 친구를 삭제하였습니다.'

const TextHandler = (event, name) => {
    switch (event) {
        case 0:
            return PENALTY
        case 1:
            return name + ADD
        case 2:
            return name + ATTACK
        case 3:
            return name + DELETE
        default:
            return ''
    }
}

export default (props: any) => {
    return (
        <Wrapper>
            <Content font="roboto">
                {TextHandler(props.event, props.name)}
            </Content>
            {props.caloring !== 0 && (
                <Number
                    color={Colors.main}
                    font="roboto"
                >{`-${props.caloring}`}</Number>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4%',
})

const Content = styled(Text)({})

const Number = styled(Text)({})
