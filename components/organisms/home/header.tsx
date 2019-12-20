import React from 'react'
import styled from 'styled-components/native'

import Status from '../../molecules/status'
import * as screen from '../../../constants/Dimensions'

export default (props: any) => {
    return (
        <Wrapper>
            <Status
                label="ENERGY"
                gage={props.energyGage}
                leftNumber={props.energy}
                rightNumber={200}
            />
            <Status
                label="TOTAL"
                gage={props.totalGage}
                leftNumber={props.totalCaloring}
                rightNumber={800}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View({
    marginTop: screen.height * 0.047,
    marginHorizontal: screen.width * 0.044,
})
