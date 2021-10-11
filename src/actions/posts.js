import { CREATE, FETCH_ALL, FETCH_POST } from '../constants/actionTypes'
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