import { CREATE, FETCH_ALL, FETCH_POST } from '../constants/actionTypes'

export default (state = { posts: []}, action) => {
    switch(action.type) {
        case CREATE:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload
            }
        case FETCH_POST:
            return { ...state, post: action.payload.post };
        default:
            return state
    }
}