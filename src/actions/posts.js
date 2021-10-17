import {
    CREATE,
    FETCH_ALL,
    FETCH_POST,
    UPDATE,
    DELETE,
    GET_LIVING_LOCATION_POSTS,
    GET_PHOTO_ALBUM_POSTS,
    START_LOADING,
    END_LOADING,
    GET_NOTICE_POSTS,
    GET_BUY_SELL_POSTS,
    GET_JOB_SEARCH_POSTS,
    GET_NOTICE_LATEST_POSTS,
    GET_PHOTO_ALBUM_LATEST_POSTS,
    GET_BUY_SELL_LATEST_POSTS,
    GET_JOB_SEARCH_LATEST_POSTS
} from "../constants/actionTypes";
import * as api from "../api/index";

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({
            type: CREATE,
            payload: data,
        });

    } catch (error) {
        console.log(error);
    }
};

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPosts();
        dispatch({
            type: FETCH_ALL,
            payload: data,
        });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchPost(id);

        dispatch({ type: FETCH_POST, payload: { post: data } });
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const getLivingLocationPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getLivingLocationPosts();
        dispatch({ type: GET_LIVING_LOCATION_POSTS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getPhotoAlbumPosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getPhotoAlbumPosts();
        dispatch({ type: GET_PHOTO_ALBUM_POSTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getPhotoAlbumLatestPosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getPhotoAlbumLatestPosts();
        dispatch({ type: GET_PHOTO_ALBUM_LATEST_POSTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getNoticePosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getNoticePosts();
        dispatch({ type: GET_NOTICE_POSTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getNoticeLatestPosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getNoticeLatestPosts();
        dispatch({ type: GET_NOTICE_LATEST_POSTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getBuySellPosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getBuySellPosts();
        dispatch({ type: GET_BUY_SELL_POSTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getBuySellLatestPosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getBuySellLatestPosts();
        dispatch({ type: GET_BUY_SELL_LATEST_POSTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getJobSearchPosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getJobSearchPosts();
        dispatch({ type: GET_JOB_SEARCH_POSTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getJobSearchLatestPosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getJobSearchLatestPosts();
        dispatch({ type: GET_JOB_SEARCH_LATEST_POSTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};
