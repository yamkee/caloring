import { PLUS, MINUS } from '../actions/subscriptions'

const initialState = {
    num: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PLUS:
            return {
                num: action.num,
            }
        case MINUS:
            return {
                num: action.num,
            }
        default:
            return initialState
    }
}
