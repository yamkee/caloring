import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import IconButton from '../../molecules/buttons/icon-button'
import * as screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'
import CloseIcon from '../../atoms/icons/left-arrow'
import dp from '../../../constants/Dp'

export default function Header(props: any) {
    return (
        <Wrapper>
            <CloseButton
                onPress={() => {
                    props.navigation.goBack()
                }}
            >
                <CloseIcon
                    width={dp(3.5)}
                    height={dp(3.5)}
                    fill={Colors.white}
                />
            </CloseButton>

            <Text color={Colors.white} level={5}>
                알림
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: screen.width,
    height: screen.height * 0.11,
})

const CloseButton = styled(IconButton)({
    width: dp(6),
    height: dp(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: screen.width * 0.039,
    marginLeft: screen.width * 0.044,
    marginBottom: dp(4.5),
})
