import Colors from '../constants/Colors'
import Location from '../constants/Location'

export const colorHandler = (penalty: boolean) => {
    const hour = new Date().getHours()
    console.log(hour)
    if (penalty) {
        return Colors.penaltyGradient
    } else {
        if (hour >= 5 && hour <= 7) {
            return Colors.lightOrangeGradient
        } else if (hour >= 8 && hour <= 10) {
            return Colors.orangeGradient
        } else if (hour >= 11 && hour <= 16) {
            return Colors.blueGradient
        } else if (hour >= 17 && hour <= 19) {
            return Colors.pinkGradient
        } else if (hour >= 20 && hour <= 22) {
            return Colors.pupleGradient
        } else if (hour >= 23 && hour <= 4) {
            return Colors.blueSerapeGradient
        }
    }
}

export const locationHandler = (penalty: boolean) => {
    const hour = new Date().getHours()
    if (penalty) {
        return Location.penaltyGradient
    } else {
        if (hour >= 5 && hour <= 7) {
            return [0, 1]
        } else if (hour >= 8 && hour <= 10) {
            return Location.orangeGradient
        } else if (hour >= 11 && hour <= 16) {
            return [0, 1]
        } else if (hour >= 17 && hour <= 19) {
            return Location.pinkGradient
        } else if (hour >= 20 && hour <= 22) {
            return Location.pupleGradient
        } else if (hour >= 23 && hour <= 4) {
            return Location.blueSerapeGradient
        }
    }
}
