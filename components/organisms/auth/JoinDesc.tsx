import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'
import * as Screen from '../../../constants/Dimensions'

export default (props: any) => {
    return (
        <Wrapper>
            <Text
                level={2}
                color={Colors.main}
                style={{ marginBottom: Screen.height * 0.025 }}
            >
                JOIN US
            </Text>
            <Text color={Colors.defaultGrey}>
                단계별 <Text color={Colors.main}>1만보 달성</Text>을 목표로
                합니다.
            </Text>
            <Text>칼로링과 함께 운동의 새로운 재미를 느껴보세요!</Text>
        </Wrapper>
    )
}

const Wrapper = styled.View({})
