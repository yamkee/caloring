import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const dpHandler = (d: number) => {
    if (width > 360) {
        return 4 * d
    } else {
        return 3.5 * d
    }
}

export default dpHandler
