import React from 'react'
import styled from 'styled-components/native'

import dp from '../../../constants/Dp'

const itemNumber = Math.floor(Math.random() * 5) + 1
export default (props: any) => {
    switch (props.level) {
        case 1:
            switch (itemNumber) {
                case 1:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree1/1.png')}
                        />
                    )
                case 2:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree1/2.png')}
                        />
                    )
                case 3:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree1/3.png')}
                        />
                    )
                case 4:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree1/4.png')}
                        />
                    )
                case 5:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree1/5.png')}
                        />
                    )
                default:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree1/1.png')}
                        />
                    )
            }
        case 2:
            switch (itemNumber) {
                case 1:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree2/1.png')}
                        />
                    )
                case 2:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree2/2.png')}
                        />
                    )
                case 3:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree2/3.png')}
                        />
                    )
                case 4:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree2/4.png')}
                        />
                    )
                case 5:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree2/5.png')}
                        />
                    )
                default:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree2/1.png')}
                        />
                    )
            }
        case 3:
            switch (itemNumber) {
                case 1:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree3/1.png')}
                        />
                    )
                case 2:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree3/2.png')}
                        />
                    )
                case 3:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree3/3.png')}
                        />
                    )
                case 4:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree3/4.png')}
                        />
                    )
                case 5:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree3/5.png')}
                        />
                    )
                default:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree3/1.png')}
                        />
                    )
            }
        case 4:
            switch (itemNumber) {
                case 1:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree4/1.png')}
                        />
                    )
                case 2:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree4/2.png')}
                        />
                    )
                case 3:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree4/3.png')}
                        />
                    )
                case 4:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree4/4.png')}
                        />
                    )
                case 5:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree4/5.png')}
                        />
                    )
                default:
                    return (
                        <Icon
                            source={require('../../../assets/friend/tree4/1.png')}
                        />
                    )
            }
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
