import { SERVER_URL } from 'react-native-dotenv'

import AsyncStorage from '@react-native-community/async-storage'

export const fetchFriends = async () => {
    const userId = await AsyncStorage.getItem('userId')
    const res = await fetch(`${SERVER_URL}/friends`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: parseInt(userId),
        }),
    })
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}

export const findFriends = async (nickname: string) => {
    const res = await fetch(`${SERVER_URL}/friend/find`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: nickname,
        }),
    })
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}

export const addFriends = async (friendId: number) => {
    const userId = await AsyncStorage.getItem('userId')
    const res = await fetch(`${SERVER_URL}/friend/create`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: parseInt(userId),
            friend_user_id: friendId,
        }),
    })
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}

export const deleteFriend = async (friendId: number) => {
    const userId = await AsyncStorage.getItem('userId')
    const res = await fetch(`${SERVER_URL}/friend/delete`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: parseInt(userId),
            friend_user_id: friendId,
        }),
    })
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}

export const attackFriend = async (friendId: number, exercising: number) => {
    const userId = await AsyncStorage.getItem('userId')
    const today = new Date()
    const res = await fetch(`${SERVER_URL}/exercising/attack`, {
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
    })
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}
