import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import { barWidth, max } from '../../organisms/myrecord/graph'
import Colors from '../../../constants/Colors'
import Text from '../../atoms/Text'

type BarType = {
    height: number
}

type BarPropsType = {
    height: number
    date: number
}

const Bar = styled(LinearGradient)<BarType>(props => ({
    width: barWidth,
    height: (max * props.height) / 10000,
    marginRight: barWidth,
    zIndex: 100,
}))

export default (props: BarPropsType) => {
    const { height, date } = props
    return (
        <Bar colors={Colors.gradient0} height={height}>
            <Text
                level={1}
                font="roboto"
                style={{ position: 'absolute', bottom: -30 }}
            >
                {date}
            </Text>
        </Bar>
    )
}
