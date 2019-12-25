import React from 'react'
import styled from 'styled-components/native'

import * as screen from '../../../constants/Dimensions'
import Test from '../../molecules/graph/bar'

export const max = screen.height * 0.196
export const barWidth = screen.width * 0.044

export default (props: any) => {
    const { step, startDate } = props
    const today = new Date().getDate()

    const dateHandler = (length: number, index: number) => {
        if (startDate !== today - 6) {
            return new Date(
                new Date().setDate(today - (length - index - 1))
            ).getDate()
        } else {
            return new Date(
                new Date().setDate(today - (length - index))
            ).getDate()
        }
    }

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
                            date={dateHandler(step.length, i)}
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
