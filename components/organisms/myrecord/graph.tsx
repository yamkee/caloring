import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import * as screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'

const max = screen.height * 0.196
const barWidth = screen.width * 0.044

export default (props: any) => {
    const { data } = props
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <Wrapper>
            <Bar
                colors={Colors.gradient0}
                style={{ marginLeft: barWidth * 0.5 }}
                height={0.3}
            />
            <Bar colors={Colors.gradient0} height={0.3} />
            <Bar colors={Colors.gradient0} height={0.3} />
            <Bar colors={Colors.gradient0} height={0.3} />
            <Bar colors={Colors.gradient0} height={0.3} />
            <Bar colors={Colors.gradient0} height={0.3} />
            <Bar colors={Colors.gradient0} height={0.3} />
            <Line height={0} />
            <Line height={0.2} />
            <Line height={0.4} />
            <Line height={0.6} />
            <Line height={0.8} />
            <Line height={1} />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: barWidth * 15,
    height: max,
    flexDirection: 'row',
    alignItems: 'flex-end',
})

const Bar = styled(LinearGradient)<LineType>(props => ({
    width: barWidth,
    height: max * props.height,
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
    height: number
}
