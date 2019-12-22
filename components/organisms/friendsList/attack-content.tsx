import React from 'react'
import styled from 'styled-components/native'
import { useSelector } from 'react-redux'

import Text from '../../atoms/Text'
import dp from '../../../constants/Dp'
import Colors from '../../../constants/Colors'
import Button from '../../molecules/buttons/round'
import * as screen from '../../../constants/Dimensions'

export default (props: any) => {
    const exercising = useSelector((state: any) => state.userData.exercising)
    return (
        <Content>
            <Text
                font="roboto"
                level={3}
                color={Colors.coral}
                weight={4}
                style={{ marginBottom: dp(4) }}
            >
                ATTACK NOTION
            </Text>
            <Text font="roboto" style={{ marginBottom: dp(4) }} color="black">
                {`${props.nick}님을 공격하시겠습니까?`}
            </Text>
            <Text color={Colors.lightCoral} font="roboto" weight={4}>
                {`성장 경험치가 ${exercising}% 감소함`}
            </Text>
            <ButtonContainer>
                <Button
                    title="아니오"
                    onPress={() => {
                        props.setVisible(false)
                    }}
                    width={screen.width * 0.342}
                    height={screen.height * 0.061}
                    color={Colors.white}
                    style={{ elevation: 4 }}
                    fontWeight={4}
                />
                <Button
                    title="예"
                    onPress={() => {
                        props.setVisible(false)
                        props.attack(exercising)
                    }}
                    width={screen.width * 0.342}
                    height={screen.height * 0.061}
                    color={Colors.main}
                    style={{ elevation: 4 }}
                    fontWeight={4}
                />
            </ButtonContainer>
        </Content>
    )
}

const Content = styled.View({
    alignItems: 'center',
    marginTop: dp(12 + 3),
})

const ButtonContainer = styled.View({
    width: screen.width,
    paddingHorizontal: screen.width * 0.11,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: dp(6),
})
