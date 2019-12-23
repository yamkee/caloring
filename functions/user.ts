import AsyncStorage from '@react-native-community/async-storage'

export const updateExercising = async (
    exer: number,
    level: number,
    total: number
) => {
    const userId = await AsyncStorage.getItem('userId')
    const res = await fetch(
        'https://d16nav0m28xkxy.cloudfront.net/exercising/update',
        {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: parseInt(userId),
                exercising: exer,
                attacked_caloring: 600,
                level: level,
                total_caloring: total,
            }),
        }
    )
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}

export const getAlarm = async () => {
    const userId = await AsyncStorage.getItem('userId')
    const res = await fetch(
        'https://d16nav0m28xkxy.cloudfront.net/alarm/show',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: parseInt(userId),
            }),
        }
    )
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}

export const updatedTotal = async () => {
    const userId = await AsyncStorage.getItem('userId')
    const res = await fetch(
        'https://d16nav0m28xkxy.cloudfront.net/alarm/show',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: parseInt(userId),
            }),
        }
    )
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}
