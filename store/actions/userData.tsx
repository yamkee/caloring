export const SAVE_USER_DATA = 'SAVE_USER_DATA'
export const SAVE_EXERCISING = 'SAVE_EXERCISING'
export const SAVE_PENALTY = 'SAVE_PENALTY'
export const SAVE_ATTACKED_CALORING = 'SAVE_ATTACKED_CALORING'

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

export const savePenalty = (penalty: boolean) => {
    return {
        type: SAVE_PENALTY,
        penalty,
    }
}

export const saveAttackedCaloring = (attackedCaloring: number) => {
    return {
        type: SAVE_ATTACKED_CALORING,
        attackedCaloring,
    }
}
