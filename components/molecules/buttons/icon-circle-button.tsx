import styled from 'styled-components/native'

import * as screen from '../../../constants/Dimensions'

type iconCircleButtonType = {
    rad: number
    color?: string
    opacity?: number
}

export default styled.TouchableOpacity<iconCircleButtonType>(props => ({
    width: props.rad * 2,
    height: props.rad * 2,
    borderRadius: props.rad,
    backgroundColor: props.color,
    opacity: props.opacity,
    marginBottom: screen.height * 0.012,
    justifyContent: 'center',
    alignItems: 'center',
}))
