import { SAVE_ALARM } from '../actions/alarm'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ALARM:
            return {
                ...action.response,
            }
        default:
            return initialState
    }
}
