import { SAVE_SUBS } from '../actions/subscriptions'

const initialState = {
    pedometer: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SUBS:
            return {
                pedometer: action.sub,
            }
        default:
            return initialState
    }
}
