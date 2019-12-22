import React, { useState } from 'react'
import styled from 'styled-components/native'

import RoundButton from './round'
import * as screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'

export default (props: any) => {
    const [selected, setSelected] = useState(-1)

    return (
        <Wrapper style={props.style}>
            <RoundButton
                onPress={() => {
                    props.onPress(0)
                    setSelected(0)
                }}
                width={screen.width * 0.436}
                height={screen.height * 0.059}
                title="남"
                borderColor={Colors.main}
                color={selected === 0 ? Colors.main : ''}
                textColor={selected === 0 ? 'white' : ''}
            />
            <RoundButton
                onPress={() => {
                    props.onPress(1)
                    setSelected(1)
                }}
                width={screen.width * 0.436}
                height={screen.height * 0.059}
                title="여"
                borderColor={Colors.main}
                color={selected === 1 ? Colors.main : ''}
                textColor={selected === 1 ? 'white' : ''}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: screen.width * 0.025,
})
