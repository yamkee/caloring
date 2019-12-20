import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
    <Svg viewBox="0 0 357 357" {...props}>
        <Path d="M357 204H204v153h-51V204H0v-51h153V0h51v153h153v51z" />
    </Svg>
)

export default SvgComponent
