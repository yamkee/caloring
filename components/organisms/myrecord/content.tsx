import React from 'react'
import styled from 'styled-components/native'

import * as screen from '../../../constants/Dimensions'
import Text from '../../atoms/Text'
import dp from '../../../constants/Dp'
import Colors from '../../../constants/Colors'

const Radius = (screen.width * 0.514) / 2

export default (props: any) => {
    const today = new Date()
    return (
        <Wrapper>
            <Text color="black" level={4} weight={5}>{`${today.getMonth() +
                1}월 ${today.getDate()}일 ${today.getFullYear()}년`}</Text>
            <Circle>
                <Text color="black" font="roboto">
                    오늘의 발자국
                </Text>
                <Text color="white" font="roboto" level={6} weight={4}>
                    {props.step}
                </Text>
            </Circle>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: '100%',
    height: '40%',
    alignItems: 'center',
})

const Circle = styled.View({
    width: 2 * Radius,
    height: 2 * Radius,
    borderRadius: Radius,
    borderWidth: dp(2),
    borderColor: Colors.recordBorder,
    backgroundColor: Colors.recordCircle,
    marginTop: dp(4),
    justifyContent: 'center',
    alignItems: 'center',
})
