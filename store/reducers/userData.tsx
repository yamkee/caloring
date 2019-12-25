import {
    SAVE_USER_DATA,
    SAVE_PENALTY,
    SAVE_ATTACKED_CALORING,
} from '../actions/userData'

const initialState = {
    nickname: 'nick',
    totalCaloring: 0,
    level: 0,
    exercising: 0,
    attackedCaloring: 0,
    penalty: false,
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case SAVE_USER_DATA:
            return {
                ...state,
                ...action.userData,
            }
        case SAVE_PENALTY:
            return {
                ...state,
                penalty: action.penalty,
            }
        case SAVE_ATTACKED_CALORING:
            return {
                ...state,
                attackedCaloring: action.attackedCaloring,
            }
        default:
            return {
                ...state,
            }
    }
}
