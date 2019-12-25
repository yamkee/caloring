import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'
import { Animated, ShadowPropTypesIOS } from 'react-native'

import * as screen from '../../constants/Dimensions'
import Text from '../atoms/Text'
import Colors from '../../constants/Colors'
import { useSelector } from 'react-redux'

const max = screen.width * 0.895

export default (props: any) => {
    const [per] = useState(new Animated.Value(0))
    const attacked = useSelector(
        (state: any) => state.userData.attackedCaloring
    )
    const total = useSelector((state: any) => state.userData.totalCaloring)

    useEffect(() => {
        Animated.timing(per, { toValue: props.gage, duration: 1000 }).start()
    }, [])

    return (
        <Wrapper>
            <Label>
                <Text
                    style={{ marginRight: screen.width * 0.025 }}
                    font="roboto"
                    color={Colors.white}
                    weight={4}
                >
                    {props.label}
                </Text>
                <Text font="roboto" color={Colors.white} weight={3}>
                    {`${props.leftNumber}/${props.rightNumber}`}
                </Text>
            </Label>

            <Gage>
                <Animated.View
                    style={{
                        width: per,
                        height: screen.height * 0.017,
                        marginHorizontal: screen.width * 0.008,
                        marginVertical: screen.height * 0.005,
                        borderRadius: (screen.height * 0.017) / 2,
                    }}
                >
                    <StateContainer>
                        <State
                            colors={Colors.totalGradient}
                            start={[0, 0]}
                            end={[1, 0]}
                            attack={parseInt(attacked)}
                            total={parseInt(total)}
                        />
                        <Attack
                            colors={Colors.penaltyGage}
                            start={[0, 0]}
                            end={[1, 0]}
                            attack={parseInt(attacked)}
                            total={parseInt(total)}
                        />
                    </StateContainer>
                </Animated.View>
            </Gage>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: screen.width * 0.911,
    marginBottom: screen.height * 0.014,
})

const Label = styled.View({
    flexDirection: 'row',
    marginBottom: screen.height * 0.011,
})

const Gage = styled.View({
    width: screen.width * 0.911,
    height: screen.height * 0.027,
    backgroundColor: Colors.white,
    borderRadius: (screen.height * 0.027) / 2,
})

const State = styled(LinearGradient)<stateProps>(props => ({
    width: widthHandler(props.attack, props.total),
    height: '100%',
    borderTopLeftRadius: (screen.height * 0.017) / 2,
    borderBottomLeftRadius: (screen.height * 0.017) / 2,
    borderRadius: props.attack > 0 ? 0 : (screen.height * 0.017) / 2,
}))

const Attack = styled(LinearGradient)<stateProps>(props => ({
    width: attackWidthHandler(props.attack, props.total),
    height: '100%',
    borderTopRightRadius: (screen.height * 0.017) / 2,
    borderBottomRightRadius: (screen.height * 0.017) / 2,
    borderRadius:
        props.attack >= props.total % 200 ? (screen.height * 0.017) / 2 : 0,
}))

const StateContainer = styled.View({
    width: '100%',
    height: '100%',
    borderRadius: (screen.height * 0.017) / 2,
    flexDirection: 'row',
})

const attackWidthHandler = (attack, total) => {
    const energy = total % 200
    console.log(attack, total)
    if (energy <= attack) {
        return '100%'
    } else {
        const gage = (attack / energy) * 100
        console.log(gage)
        return `${gage}%`
    }
}

const widthHandler = (attack, total) => {
    const energy = total % 200
    if (energy <= attack) {
        return '0%'
    } else {
        const gage = (1 - attack / energy) * 100
        return `${gage}%`
    }
}

interface stateProps {
    attack: number
    total: number
}
