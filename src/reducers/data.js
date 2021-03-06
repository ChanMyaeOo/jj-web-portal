import { SET_CURRENT_ID } from '../constants/actionTypes'

export default (state = { currentId: null}, action) => {
    switch(action.type) {
        case SET_CURRENT_ID:
            return { ...state, currentId: action.payload}
        default:
            return state
    }
}