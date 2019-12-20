import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import IconButton from '../../molecules/buttons/icon-button'
import * as screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'
import BackIcon from '../../atoms/icons/left-arrow'
import dp from '../../../constants/Dp'
import PlusIcon from '../../atoms/icons/plus'

export default function Header(props: any) {
    return (
        <Wrapper>
            <BackButton
                onPress={() => {
                    props.navigation.goBack()
                }}
            >
                <BackIcon
                    width={dp(3.5)}
                    height={dp(3.5)}
                    fill={Colors.white}
                />
            </BackButton>

            <Text color={Colors.white} level={5}>
                친구
            </Text>
            <PlusButton onPress={() => {}}>
                <PlusIcon
                    width={dp(3.5)}
                    height={dp(3.5)}
                    fill={Colors.white}
                />
            </PlusButton>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: screen.width,
    height: screen.height * 0.112,
})

const BackButton = styled(IconButton)({
    width: dp(6),
    height: dp(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: screen.width * 0.039,
    marginLeft: screen.width * 0.044,
    marginBottom: dp(4.5),
})

const PlusButton = styled(IconButton)({
    width: dp(7),
    height: dp(7),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: dp(4.5),
    marginLeft: screen.width * 0.675,
})
