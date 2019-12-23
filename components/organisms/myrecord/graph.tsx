import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import * as screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'
import Text from '../../atoms/Text'
import Test from '../../molecules/graph/bar'

export const max = screen.height * 0.196
export const barWidth = screen.width * 0.044

export default (props: any) => {
    const { step } = props
    const date = new Date().getDate()
    if (!step) {
        return <></>
    } else {
        return (
            <Wrapper>
                {step.map((v, i) => {
                    return (
                        <Test
                            key={i}
                            height={v}
                            date={date - (step.length - 1 - i)}
                        />
                    )
                })}
                <Line height={0} />
                <Line height={0.2} />
                <Line height={0.4} />
                <Line height={0.6} />
                <Line height={0.8} />
                <Line height={1} />
            </Wrapper>
        )
    }
}

const Wrapper = styled.View({
    width: barWidth * 15,
    height: max,
    flexDirection: 'row',
    alignItems: 'flex-end',
})

const Bar = styled(LinearGradient)<LineType>(props => ({
    width: barWidth,
    height: (max * props.height) / 10000,
    marginRight: barWidth,
    zIndex: 100,
}))

const Line = styled.View<LineType>(props => ({
    position: 'absolute',
    bottom: max * props.height,
    width: barWidth * 15,
    height: 1,
    backgroundColor: 'white',
}))

type LineType = {
    height: any
}
