import { CREATE, FETCH_ALL, FETCH_POST, UPDATE, DELETE, GET_LIVING_LOCATION_POSTS } from '../constants/actionTypes'
import * as api from '../api/index'

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)
        dispatch({
            type: CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts()
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

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
    dispatch({ type: GET_LIVING_LOCATION_POSTS, payload: data })
  } catch (error) {
      console.log(error)
  }
}