import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
    <Svg viewBox="0 0 60 60" {...props}>
        <Path d="M59 51.5h-1v-37H46v37h-3v-45H31v45h-3v-14H16v14h-3v-23H1v23a1 1 0 100 2h58a1 1 0 100-2z" />
    </Svg>
)

export default SvgComponent
