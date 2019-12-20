import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const dpHandler = (d: number) => {
    return 4 * d
}

export default dpHandler
