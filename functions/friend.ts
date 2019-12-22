import AsyncStorage from '@react-native-community/async-storage'

export const fetchFriends = async () => {
    const userId = await AsyncStorage.getItem('userId')
    const res = await fetch('https://d16nav0m28xkxy.cloudfront.net/friends', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: parseInt(userId),
        }),
    })
    console.log(res)
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}

export const findFriends = async (nickname: string) => {
    const res = await fetch(
        'https://d16nav0m28xkxy.cloudfront.net/friend/find',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nickname,
            }),
        }
    )
    console.log(res)
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}

export const addFriends = async (friendId: number) => {
    const userId = await AsyncStorage.getItem('userId')
    const res = await fetch(
        'https://d16nav0m28xkxy.cloudfront.net/friend/create',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: parseInt(userId),
                friend_user_id: friendId,
            }),
        }
    )
    console.log(res)
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}

export const deleteFriend = async (friendId: number) => {
    const userId = await AsyncStorage.getItem('userId')
    const res = await fetch(
        'https://d16nav0m28xkxy.cloudfront.net/friend/delete',
        {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: parseInt(userId),
                friend_user_id: friendId,
            }),
        }
    )
    console.log(res)
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}

export const attackFriend = async (friendId: number, exercising: number) => {
    const userId = await AsyncStorage.getItem('userId')
    const today = new Date()
    const res = await fetch(
        'https://d16nav0m28xkxy.cloudfront.net/exercising/attack',
        {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: parseInt(userId),
                friend_user_id: friendId,
                exercising: exercising,
                updateAt: `${today.getFullYear()}-${today.getMonth() +
                    1}-${today.getDate()}`,
            }),
        }
    )
    console.log(res)
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}
