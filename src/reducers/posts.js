import { CREATE } from '../constants/actionTypes'

export default (state = { posts: []}, action) => {
    switch(action.type) {
        case CREATE:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default:
            return state
    }
}