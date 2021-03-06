import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import dp from '../../constants/Dp'
import * as screen from '../../constants/Dimensions'
import Colors from '../../constants/Colors'
import Circle from '../atoms/circle'

const width = screen.width * 0.61
const lineWidth = (width - dp(6) * 5) / 4

export default (props: any) => {
    const { level, gage } = props
    const [percent, setPercent] = useState([0, 0, 0, 0])

    const gageHandler = (level, gage) => {
        if (level === 0) {
            setPercent([gage / 100, 0, 0, 0])
        } else if (level - 1 === 0) {
            setPercent([1, gage / 100, 0, 0])
        } else if (level - 2 === 0) {
            setPercent([1, 1, gage / 100, 0])
        } else if (level - 3 === 0) {
            setPercent([1, 1, 1, gage / 100])
        }
    }

    useEffect(() => {
        gageHandler(level, gage)
    }, [level, gage])

    return (
        <Wrapper>
            <Circle fill={level >= 0} />
            <LineWrapper>
                <Line gage={percent[0]} />
            </LineWrapper>
            <Circle fill={level - 1 >= 0} />
            <LineWrapper>
                <Line gage={percent[1]} />
            </LineWrapper>
            <Circle fill={level - 2 >= 0} />
            <LineWrapper>
                <Line gage={percent[2]} />
            </LineWrapper>
            <Circle fill={level - 3 === 0} />
            <LineWrapper>
                <Line gage={percent[3]} />
            </LineWrapper>
            <Circle fill={level - 4 === 0} />
        </Wrapper>
    )
}
const Wrapper = styled.View({
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: dp(2),
})

const Line = styled.View<LineProps>(props => ({
    width: lineWidth * props.gage,
    height: dp(3) / 2,
    backgroundColor: Colors.main,
    opacity: 1,
}))

const LineWrapper = styled.View({
    width: lineWidth,
    height: dp(3) / 2,
    backgroundColor: Colors.white,
    opacity: 0.6,
})

interface LineProps {
    gage: number
}
