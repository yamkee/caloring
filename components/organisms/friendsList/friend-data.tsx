import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import * as screen from '../../../constants/Dimensions'
import Text from '../../atoms/Text'

export default (props: any) => {
    return (
        <Data style={props.style}>
            <Text font="roboto" level={1}>
                {props.title}
            </Text>
            <Graph>
                <Bar colors={props.colors} gage={props.gage} />
            </Graph>
        </Data>
    )
}

const Data = styled.View({
    width: screen.width * 0.487,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const Graph = styled.View({
    width: screen.width * 0.35,
    height: screen.height * 0.016,
    borderRadius: (screen.height * 0.016) / 2,
    backgroundColor: '#999999',
    alignSelf: 'center',
})

const Bar = styled(LinearGradient)<BarType>(props => ({
    width: screen.width * 0.35 * props.gage,
    height: screen.height * 0.016,
    borderRadius: (screen.height * 0.016) / 2,
}))

type BarType = {
    gage: number
}
