import { SAVE_USER_DATA, SAVE_PENALTY } from '../actions/userData'

const initialState = {
    nickname: 'nick',
    totalCaloring: 0,
    level: 0,
    exercising: 0,
    penalty: false,
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case SAVE_USER_DATA:
            return {
                ...action.userData,
            }
        case SAVE_PENALTY:
            return {
                ...state,
                penalty: action.penalty,
            }
        default:
            return {
                ...state,
            }
    }
}
