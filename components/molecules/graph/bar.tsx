import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Animated } from 'react-native'

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
    height: '100%',
    zIndex: 100,
}))

export default (props: BarPropsType) => {
    const { height, date } = props
    const [per] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(per, {
            toValue: (max * props.height) / 10000,
            duration: 1000,
        }).start()
    }, [])

    return (
        <Animated.View
            style={{
                width: barWidth,
                height: per,
                marginRight: barWidth,
                zIndex: 100,
            }}
        >
            <Bar colors={Colors.gradient0} height={height}>
                <Text
                    level={1}
                    font="roboto"
                    style={{ position: 'absolute', bottom: -30 }}
                >
                    {date}
                </Text>
            </Bar>
        </Animated.View>
    )
}
