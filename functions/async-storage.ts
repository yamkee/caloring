import AsyncStorage from '@react-native-community/async-storage'
import { updatedTotal } from '../functions/user'

export const setRealTime = async (set: any) => {
    try {
        const value = await AsyncStorage.getItem('date')
        if (new Date().getDate().toString() !== value) {
            const res = await updatedTotal()
            if (res.total_caloring % 200 === 0) {
                const yesterdayCaloring = await AsyncStorage.getItem('total')
                if (
                    parseInt(yesterdayCaloring) > parseInt(res.total_caloring)
                ) {
                    set(true)
                }
            }
            try {
                await AsyncStorage.setItem(
                    'date',
                    new Date().getDate().toString()
                )
            } catch (err) {}
        } else {
            console.log('date not change')
        }
    } catch (err) {}
}

export const updateAsyncStorage = async totalCaloring => {
    try {
        await AsyncStorage.setItem('total', totalCaloring.toString())
    } catch (err) {}
}
