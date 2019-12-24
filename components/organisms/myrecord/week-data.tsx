import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import Graph from './graph'

import { max, barWidth } from './graph'
import dpHandler from '../../../constants/Dp'

export default (props: any) => {
    const { startDate, weekStep } = props
    const today = new Date()
    if (!startDate) {
        return <></>
    } else {
        return (
            <Wrapper>
                <Text color="black" level={4}>
                    이번주 발자국
                </Text>

                <Text>{`${startDate[0]}년 ${startDate[1]}월 ${
                    startDate[2]
                }일 - ${today.getMonth() + 1}월 ${today.getDate()}일`}</Text>
                <GraphContainer>
                    <LabelYContainer>
                        <LabelY font="roboto" level={1} height={1}>
                            10000
                        </LabelY>
                        <LabelY font="roboto" level={1} height={0.8}>
                            {` 8000`}
                        </LabelY>
                        <LabelY font="roboto" level={1} height={0.6}>
                            {` 6000`}
                        </LabelY>
                        <LabelY font="roboto" level={1} height={0.4}>
                            {` 4000`}
                        </LabelY>
                        <LabelY font="roboto" level={1} height={0.2}>
                            {` 2000`}
                        </LabelY>
                        <LabelY font="roboto" level={1} height={0}>
                            {` 0000`}
                        </LabelY>
                    </LabelYContainer>
                    <Graph step={weekStep} />
                </GraphContainer>
            </Wrapper>
        )
    }
}

const Wrapper = styled.View({
    width: '100%',
    height: '49%',
    alignItems: 'center',
})

const GraphContainer = styled.View({
    marginTop: dpHandler(6),
    width: barWidth * 17,
    height: max,
    flexDirection: 'row',
    paddingRight: dpHandler(3),
})

const LabelYContainer = styled.View({
    width: barWidth * 2.5,
    height: max,
    justifyContent: 'flex-end',
})

const LabelY = styled(Text)<LabelYProps>(props => ({
    position: 'absolute',
    bottom: max * props.height - 5,
    alignItems: 'flex-end',
}))

type LabelYProps = {
    height: number
}
