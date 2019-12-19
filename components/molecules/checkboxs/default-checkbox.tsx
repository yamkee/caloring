import React, { useState, useEffect } from 'react'
import { CheckBox } from 'react-native'
import styled from 'styled-components/native'

import * as screen from '../../../constants/Dimensions'
import Text from '../../atoms/Text'

const Wrapper = styled.View({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screen.height * 0.03,
})

export default (props: any) => {
    const [agree, setAgree] = useState(false)
    useEffect(() => {
        props.setAgree(agree)
    }, [agree])
    return (
        <Wrapper>
            <CheckBox
                value={agree}
                onValueChange={() => {
                    setAgree(prev => !prev)
                }}
            />
            <Text>{props.title}</Text>
        </Wrapper>
    )
}
