import React from 'react'
import ActionButton from 'react-native-action-button'

import Leaf from '../../atoms/icons/leaf'
import Colors from '../../../constants/Colors'
import Graph from '../../atoms/icons/graph'
import dp from '../../../constants/Dp'
import AttackIcon from '../../atoms/icons/attack-button'
import * as screen from '../../../constants/Dimensions'
import styled from 'styled-components/native'

export default (props: any) => {
    return (
        <ActionButton
            buttonColor={Colors.main}
            renderIcon={() => {
                return (
                    <Leaf
                        width={21.489 * 1.3}
                        height={29.706 * 1.3}
                        fill={Colors.white}
                    />
                )
            }}
            size={dp(18)}
            fixNativeFeedbackRadius
            offsetY={screen.height * 0.06}
        >
            <ActionButton.Item
                buttonColor={Colors.white}
                onPress={() => {
                    props.navigation.navigate('MyRecord', {
                        step: props.step,
                        weekStep: props.weekStep,
                    })
                }}
                size={dp(17)}
            >
                <Graph width={21 * 1.3} height={21 * 1.3} fill={Colors.main} />
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor={Colors.white}
                onPress={() => {
                    props.navigation.navigate('FriendList')
                }}
                size={dp(17)}
            >
                <AttackIcon
                    width={14.453 * 1.7}
                    height={25.963 * 1.7}
                    fill={Colors.main}
                />
            </ActionButton.Item>
        </ActionButton>
    )
}

const Wrapper = styled.View({})
