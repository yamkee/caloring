import React, { useState } from 'react'
import styled from 'styled-components/native'

import * as screen from '../../constants/Dimensions'
import dp from '../../constants/Dp'
import Colors from '../../constants/Colors'
import Text from '../atoms/Text'
import LevelText from '../../functions/level-text'
import FriendIcon from '../molecules/image/friend-icon'
import Data from '../organisms/friendsList/friend-data'

type friendItemType = {
    nickname: string
    level: number
    todayGage: number
    expGage: number
    onPress: any
    onLongPress: any
}

export default (props: friendItemType) => {
    return (
        <Wrapper onPress={props.onPress} onLongPress={props.onLongPress}>
            <A>
                <ImageContainer>
                    <FriendIcon level={props.level} />
                </ImageContainer>
                <Content>
                    <FriendData>
                        <Text
                            font="roboto"
                            style={{ marginBottom: '8.6%' }}
                            level={1}
                        >
                            {props.nickname}
                        </Text>
                        <Text font="roboto" level={1} weight={1}>
                            {LevelText(props.level)}
                        </Text>
                    </FriendData>
                    <FriendData2>
                        <Data
                            title="TODAY"
                            style={{ marginBottom: '5.4%' }}
                            colors={Colors.todayGage}
                            gage={props.todayGage}
                        />
                        <Data
                            title="EXP"
                            colors={Colors.expGage}
                            gage={props.expGage}
                        />
                    </FriendData2>
                </Content>
            </A>
        </Wrapper>
    )
}

const A = styled.View({
    width: screen.width,
    height: screen.height * 0.145,
    borderBottomWidth: 1,
    borderColor: Colors.borderGrey,
    paddingHorizontal: screen.width * 0.044,
    paddingVertical: screen.height * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
})

const Wrapper = styled.TouchableNativeFeedback({})

const ImageContainer = styled.View({
    width: dp(15),
    height: '100%',
    justifyContent: 'center',
})

const Content = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
})

const FriendData = styled.View({
    height: '100%',
    justifyContent: 'center',
})

const FriendData2 = styled.View({
    height: '100%',
    justifyContent: 'center',
})
