import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import dp from '../../../../constants/Dp'
import Colors from '../../../../constants/Colors'

import * as screen from '../../../../constants/Dimensions'

const SubTitle = styled.View({
    marginLeft: screen.width * 0.04,
    marginTop: dp(3.5),
    marginBottom: dp(1),
})

export default (props: any) => {
    return (
        <SubTitle>
            <Text
                style={{
                    fontSize: dp(3.5),
                    fontFamily: 'NotoSansCJKkr-Regular',
                }}
            >
                <Text style={{ color: Colors.main }}>직접 목표를 설정</Text>
                {`하여 걷기 운동을 해보세요!
단순한 걷기 운동의 색다른 재미를선사해줍니다.`}
            </Text>
        </SubTitle>
    )
}
