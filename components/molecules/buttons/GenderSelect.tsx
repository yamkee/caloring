import React, { useState } from 'react'
import styled from 'styled-components/native'

import RoundButton from '../buttons/round'
import * as Screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'

export default (props: any) => {
    const [selected, setSelected] = useState(-1)

    return (
        <Wrapper style={props.style}>
            <RoundButton
                onPress={() => {
                    props.onPress('남')
                    setSelected(0)
                }}
                width={Screen.width * 0.436}
                height={Screen.height * 0.059}
                title="남"
                borderColor={Colors.defaultGrey}
                color={selected === 0 ? Colors.main : ''}
                textColor={selected === 0 ? 'white' : ''}
            />
            <RoundButton
                onPress={() => {
                    props.onPress('여')
                    setSelected(1)
                }}
                width={Screen.width * 0.436}
                height={Screen.height * 0.059}
                title="여"
                borderColor={Colors.defaultGrey}
                color={selected === 1 ? Colors.main : ''}
                textColor={selected === 1 ? 'white' : ''}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-between',
})
