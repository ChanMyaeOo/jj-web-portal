import {
    CREATE,
    FETCH_ALL,
    FETCH_POST,
    UPDATE,
    DELETE,
    GET_LIVING_LOCATION_POSTS
} from "../constants/actionTypes";

export default (state = { posts: [], livingLocationPosts: [] }, action) => {
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
        case GET_LIVING_LOCATION_POSTS:
            return {
                ...state,
                livingLocationPosts: action.payload
            }
        default:
            return state;
    }
};
