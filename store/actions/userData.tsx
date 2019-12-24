export const SAVE_USER_DATA = 'SAVE_USER_DATA'
export const SAVE_EXERCISING = 'SAVE_EXERCISING'
export const SAVE_PENALTY = 'SAVE_PENALTY'

export const saveData = (
    nickname: string,
    totalCaloring: number,
    level: number,
    exercising: number,
    penalty: boolean
) => {
    return {
        type: SAVE_USER_DATA,
        userData: { nickname, totalCaloring, level, exercising, penalty },
    }
}

export const savePenalty = (penalty: boolean) => {
    return {
        type: SAVE_PENALTY,
        penalty,
    }
}
