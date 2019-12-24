import React from 'react'
import styled from 'styled-components/native'

import Text from '../../atoms/Text'
import * as screen from '../../../constants/Dimensions'
import Colors from '../../../constants/Colors'

type ContentDatePropsType = {
    date: any
}

export default (props: ContentDatePropsType) => {
    const { date } = props
    return (
        <Wrapper>
            <Text
                weight={5}
                font="roboto"
                color="black"
            >{`${date[0]}년 ${date[1]}월 ${date[2]}일`}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    width: '100%',
    borderBottomColor: Colors.borderGrey,
    borderBottomWidth: 1,
    paddingBottom: '2%',
    paddingTop: '3%',
    marginTop: '4%',
})
