import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import * as screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'

export default () => {
    return (
        <Wrapper>
            <Text color={Colors.defaultGrey} level={1} style={{ opacity: 1 }}>
                오늘의 발자국
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: screen.width * 0.236,
    height: screen.height * 0.036,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: (screen.height * 0.036) / 2,
    marginTop: screen.height * 0.04,
})
