type signUpData = {
    nickname: string
    password: string
    age: number
    gender: number
}

type logInData = {
    nickname: string
    password: string
}
export const signUp = async (data: signUpData) => {
    const res = await fetch('https://d16nav0m28xkxy.cloudfront.net/signin', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: null,
            name: data.nickname,
            password: data.password,
            updateAt: null,
            exercising: 0,
            attacked_caloring: 1,
            total_caloring: 1,
            level: 0,
            age: data.age,
            gender: data.gender,
        }),
    })
    console.log(res)
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}

export const autoLogin = async (userId: string) => {
    const res = await fetch('https://d16nav0m28xkxy.cloudfront.net/autoLogin', {
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

export const logIn = async (data: logInData) => {
    const res = await fetch('https://d16nav0m28xkxy.cloudfront.net/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: null,
            name: data.nickname,
            password: data.password,
            updateAt: null,
            exercising: 0,
            attacked_caloring: 1,
            total_caloring: 1,
            level: 0,
            age: 10,
            gender: 0,
        }),
    })
    console.log(res)
    if (!res.ok) {
        console.log('response error')
    }
    const userData = await res.json()
    return userData
}
