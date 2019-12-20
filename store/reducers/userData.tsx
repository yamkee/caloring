import { SAVE_USER_DATA } from '../actions/userData'

const initialState = {
    nickname: 'nick',
    totalCaloring: 0,
    level: 0,
    exercising: 0,
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case SAVE_USER_DATA:
            return {
                ...action.userData,
            }
        default:
            return initialState
    }
}
