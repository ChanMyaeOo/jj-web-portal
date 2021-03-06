import {
    CREATE,
    FETCH_ALL,
    FETCH_POST,
    UPDATE,
    DELETE,
    GET_LIVING_LOCATION_POSTS,
    GET_PHOTO_ALBUM_POSTS,
    GET_NOTICE_POSTS,
    GET_BUY_SELL_POSTS,
    GET_JOB_SEARCH_POSTS,
    GET_JOB_SEARCH_LATEST_POSTS,
    GET_NOTICE_LATEST_POSTS,
    GET_PHOTO_ALBUM_LATEST_POSTS,
    GET_BUY_SELL_LATEST_POSTS,
    START_LOADING,
    END_LOADING,
    GET_LATEST_POSTS,
    COMMENT,
    GET_OWN_POSTS,
    GET_PHOTO_ALBUM_TOTAL,
    GET_NOTICE_TOTAL,
    GET_LIV_TOTAL,
    GET_BUY_SELL_TOTAL,
    GET_JOB_SEARCH_TOTAL
} from "../constants/actionTypes";

export default (
    state = {
        posts: [],
        isLoading: true,
        livingLocationPosts: [],
        photoAlbumPosts: [],
        noticePosts: [],
        buySellPosts: [],
        jobSearchPosts: [],
        noticeLatestPosts: [],
        photoAlbumLatestPosts: [],
        buySellLatestPosts: [],
        jobSearchLatestPosts: [],
        latestPosts: [],
        ownPosts: [],
        photoAlbumTotal: 0,
        noticeTotal: 0,
        livTotal: 0,
        buySellTotal: 0,
        jobSearchTotal: 0
    },
    action
) => {
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
        case COMMENT: 
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post._id === action.payload._id) return action.payload
                    return post
                })
            };
        case GET_OWN_POSTS:
            return {
                ...state,
                ownPosts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            }
        case GET_LATEST_POSTS:
            return {
                ...state,
                latestPosts: action.payload,
            };
        case GET_LIVING_LOCATION_POSTS:
            return {
                ...state,
                livingLocationPosts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case GET_LIV_TOTAL:
            return {
                ...state,
                livTotal: action.payload
            };
        case GET_PHOTO_ALBUM_POSTS:
            return {
                ...state,
                photoAlbumPosts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case GET_PHOTO_ALBUM_LATEST_POSTS:
            return {
                ...state,
                photoAlbumLatestPosts: action.payload,
            };
        case GET_PHOTO_ALBUM_TOTAL:
            return {
                ...state,
                photoAlbumTotal: action.payload
            };
        case GET_NOTICE_POSTS:
            return {
                ...state,
                noticePosts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case GET_NOTICE_TOTAL:
            return {
                ...state,
                noticeTotal: action.payload
            };
        case GET_BUY_SELL_POSTS:
            return {
                ...state,
                buySellPosts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case GET_BUY_SELL_TOTAL:
            return {
                ...state,
                buySellTotal: action.payload
            };
        case GET_BUY_SELL_LATEST_POSTS:
            return {
                ...state,
                buySellLatestPosts: action.payload,
            };
        case GET_JOB_SEARCH_POSTS:
            return {
                ...state,
                jobSearchPosts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case GET_JOB_SEARCH_LATEST_POSTS:
            return {
                ...state,
                jobSearchLatestPosts: action.payload,
            };

        case GET_JOB_SEARCH_TOTAL:
            return {
                ...state,
                jobSearchTotal: action.payload
            }
        case GET_NOTICE_LATEST_POSTS:
            return {
                ...state,
                noticeLatestPosts: action.payload,
            };

        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
