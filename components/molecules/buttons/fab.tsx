import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import dp from 'constants/Dp'
import * as screen from 'constants/Dimensions'
import Colors from 'constants/Colors'

export default (props: any) => {
    return (
        <Wrapper>
            <Button onPress={() => {}} />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: screen.width * 0.5,
    height: screen.height * 0.4,
    backgroundColor: 'transparent',
})

const Button = styled(TouchableOpacity)({
    width: dp(15.2),
    height: dp(15.2),
    borderRadius: dp(15.2) / 2,
    backgroundColor: Colors.white,
})
