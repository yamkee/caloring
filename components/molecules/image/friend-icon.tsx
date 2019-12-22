import React from 'react'
import styled from 'styled-components/native'

import dp from '../../../constants/Dp'

export default (props: any) => {
    const itemNumber = Math.floor(Math.random() * 5) + 1
    switch (props.level) {
        case 1:
            return (
                <Icon
                    source={require(`../../../assets/friend/tree1/${1}.png`)}
                />
            )
        case 2:
            return (
                <Icon
                    source={require(`../../../assets/friend/tree2/${1}.png`)}
                />
            )
        case 3:
            return (
                <Icon
                    source={require(`../../../assets/friend/tree3/${1}.png`)}
                />
            )
        case 4:
            return (
                <Icon
                    source={require(`../../../assets/friend/tree4/${1}.png`)}
                />
            )
        default:
            return (
                <Icon
                    source={require(`../../../assets/friend/tree1/${1}.png`)}
                />
            )
    }
}

const Icon = styled.Image({
    width: dp(15),
    height: dp(14.5),
})
