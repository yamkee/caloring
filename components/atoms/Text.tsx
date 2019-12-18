import styled from 'styled-components/native'

import Dp from '../../constants/Dp'

interface TextProps {
    style?: any
    level?: number
    color?: string
    font?: string
    weight?: number
}

const fontSizeHandler = (level: number) => {
    switch (level) {
        case 1:
            return Dp(3)
        case 2:
            return Dp(3.3)
        case 3:
            return Dp(3.5)
        case 4:
            return Dp(4)
        case 5:
            return Dp(4.5)
        default:
            return Dp(3.5)
    }
}

const fontFamilyHandler = (font: string, weight: number) => {
    if (font == 'roboto') {
        switch (weight) {
            case 1:
                return 'Roboto-Thin'
            case 2:
                return 'Roboto-Light'
            case 3:
                return 'Roboto-Regular'
            case 4:
                return 'Roboto-Medium'
            case 5:
                return 'Roboto-Bold'
            case 6:
                return 'Roboto-Black'
            default:
                return 'Roboto-Regular'
        }
    } else {
        switch (weight) {
            case 1:
                return 'NotoSansCJKkr-Thin'
            case 2:
                return 'NotoSansCJKkr-Light'
            case 3:
                return 'NotoSansCJKkr-Regular'
            case 4:
                return 'NotoSansCJKkr-Medium'
            case 5:
                return 'NotoSansCJKkr-Bold'
            case 6:
                return 'NotoSansCJKkr-Black'
            default:
                return 'NotoSansCJKkr-Medium'
        }
    }
}

export default styled.Text<TextProps>(props => ({
    ...props.style,
    fontSize: fontSizeHandler(props.level),
    color: props.color,
    fontFamily: fontFamilyHandler(props.font, props.weight),
}))
