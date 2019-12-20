import React from 'react'
import ActionButton from 'react-native-action-button'

import Leaf from '../../atoms/icons/leaf'
import Colors from '../../../constants/Colors'
import Graph from '../../atoms/icons/graph'
import dp from '../../../constants/Dp'

export default (props: any) => {
    return (
        <ActionButton
            buttonColor={Colors.main}
            renderIcon={() => {
                return (
                    <Leaf width={21.489} height={29.706} fill={Colors.white} />
                )
            }}
            size={dp(15.2)}
            fixNativeFeedbackRadius
        >
            <ActionButton.Item
                buttonColor={Colors.main}
                onPress={() => {
                    props.navigation.navigate('MyRecord')
                }}
            >
                <Graph width={21} height={21} fill={Colors.white} />
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor={Colors.main}
                onPress={() => {
                    props.navigation.navigate('FriendList')
                }}
            >
                <Graph width={21} height={21} fill={Colors.white} />
            </ActionButton.Item>
        </ActionButton>
    )
}
