import React from 'react'
import styled from 'styled-components/native'

import Status from '../../molecules/status'
import * as screen from '../../../constants/Dimensions'
import GageBar from '../../molecules/gage-bar'
import Text from '../../atoms/Text'
import Colors from '../../../constants/Colors'

export default (props: any) => {
    return (
        <Wrapper>
            <Status
                label="ENERGY"
                gage={props.energyGage}
                leftNumber={props.energy}
                rightNumber={200}
            />
            <GageBar
                level={(props.totalCaloring / 200).toFixed(0)}
                gage={(props.totalCaloring % 200) / 2}
            />
            <Text
                style={{ alignSelf: 'center', marginTop: 5 }}
                font="roboto"
                color={Colors.white}
                weight={4}
            >
                LEVEL
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    marginTop: screen.height * 0.047,
    marginHorizontal: screen.width * 0.044,
})
