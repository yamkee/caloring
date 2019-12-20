export const SAVE_USER_DATA = 'SAVE_USER_DATA'

export const saveData = (
    nickname: string,
    totalCaloring: number,
    level: number,
    exercising: number
) => {
    return {
        type: SAVE_USER_DATA,
        userData: { nickname, totalCaloring, level, exercising },
    }
}
