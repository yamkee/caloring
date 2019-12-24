import React from 'react'
import styled from 'styled-components/native'
import { useDispatch } from 'react-redux'

import * as screen from '../../../constants/Dimensions'
import Bubble from '../../molecules/speech-bubble/default-speech-bubble'
import IconCircleButton from '../../molecules/buttons/icon-circle-button'
import FreindsIcon from '../../atoms/icons/friends'
import NotifyIcon from '../../atoms/icons/notification'
import dpHandler from '../../../constants/Dp'
import { getAlarm } from '../../../functions/user'
import * as AlarmActions from '../../../store/actions/alarm'
import Colors from '../../../constants/Colors'

type Bubble = {
    width: number
    height: number
    borderRadius: number
    color: string
    opacity?: number
    bottom: number
}

export default (props: any) => {
    const dispatch = useDispatch()
    let BubbleStyle: Bubble
    BubbleStyle = {
        width: screen.width * 0.305,
        height: screen.height * 0.058,
        borderRadius: (screen.height * 0.058) / 2,
        color: 'white',
        opacity: 0.4,
        bottom: screen.height * 0.016,
    }

    return (
        <Wrapper>
            <Bubble {...BubbleStyle} text="비" />
            <ButtonContainer>
                <IconCircleButton
                    rad={screen.width * 0.05}
                    color={Colors.blackCat}
                    opacity={0.8}
                    onPress={async () => {
                        const res = await getAlarm()
                        dispatch(AlarmActions.saveAlarmData(res))
                        props.navigation.navigate('Notifications')
                    }}
                >
                    <NotifyIcon
                        width={dpHandler(5.2)}
                        height={dpHandler(5.2)}
                        fill="white"
                    />
                </IconCircleButton>
                <IconCircleButton
                    rad={screen.width * 0.05}
                    color={Colors.blackCat}
                    opacity={0.8}
                    onPress={() => {
                        props.navigation.navigate('FriendList')
                    }}
                >
                    <FreindsIcon
                        width={dpHandler(5.2)}
                        height={dpHandler(5.2)}
                        fill="white"
                    />
                </IconCircleButton>
            </ButtonContainer>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    position: 'absolute',
    top: -1 * (screen.height * 0.1),
    width: screen.width,
    alignItems: 'center',
    marginTop: screen.height * 0.03,
})

const ButtonContainer = styled.View({
    width: screen.width,
    alignItems: 'flex-end',
    position: 'absolute',
    right: screen.width * 0.044,
    top: -1 * (screen.height * 0.01),
})
