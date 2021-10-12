import {
    CREATE,
    FETCH_ALL,
    FETCH_POST,
    UPDATE,
    DELETE,
} from "../constants/actionTypes";

export default (state = { posts: [] }, action) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload,
            };
        case FETCH_POST:
            return { ...state, post: action.payload.post };
        case UPDATE:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload._id ? action.payload : post
                ),
            };
        case DELETE:
            return {
                ...state,
                posts: state.posts.filter(
                    (post) => post._id !== action.payload
                ),
            };
        default:
            return state;
    }
};
