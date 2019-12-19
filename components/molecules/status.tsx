import React from 'react'
import {} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

import dp from '../../constants/Dp'
import * as screen from '../../constants/Dimensions'
import Text from '../atoms/Text'
import Colors from '../../constants/Colors'

export default (props: any) => {
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
                <State
                    colors={Colors.totalGradient}
                    start={[0, 0]}
                    end={[1, 0]}
                    width={props.gage}
                />
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
    width: props.width,
    height: screen.height * 0.017,
    marginHorizontal: screen.width * 0.008,
    marginVertical: screen.height * 0.005,
    borderRadius: (screen.height * 0.017) / 2,
}))

interface stateProps {
    width: number
}
