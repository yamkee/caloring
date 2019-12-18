import React from 'react'
import {} from 'react-native'
import styled from 'styled-components/native'

import Text from '../../../atoms/Text'
import Button from '../../../molecules/buttons/default-button'
import * as screen from '../../../../constants/Dimensions'
import Colors from '../../../../constants/Colors'

export default function Header(props: any) {
    return (
        <Wrapper>
            <Button
                title="X"
                onPress={() => {
                    props.navigation.goBack()
                }}
            />
            <Text color={Colors.white} level={5}>
                회원가입
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: screen.width,
    height: screen.height * 0.112,
    flexDirection: 'row',
})
