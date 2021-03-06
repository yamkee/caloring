import React from 'react'
import styled from 'styled-components/native'

import dp from '../../constants/Dp'
import * as screen from '../../constants/Dimensions'
import Colors from '../../constants/Colors'

export default (props: any) => {
    return (
        <Circle fill={props.fill}>
            <InnerCircle />
        </Circle>
    )
}

interface CircleProps {
    fill?: boolean
}

const Circle = styled.View<CircleProps>(props => ({
    width: dp(6),
    height: dp(6),
    borderRadius: dp(6) / 2,
    backgroundColor: props.fill ? Colors.main : Colors.white,
    opacity: props.fill ? 1 : 0.6,
    justifyContent: 'center',
    alignItems: 'center',
}))

const InnerCircle = styled.View({
    width: dp(3),
    height: dp(3),
    borderRadius: dp(3) / 2,
    backgroundColor: Colors.white,
    opacity: 0.8,
})
