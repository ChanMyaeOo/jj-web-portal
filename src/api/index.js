import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const createPost = (newPost) => API.post('/posts', newPost);
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const getLivingLocationPosts = () => API.get('/posts/living-location')
export const getPhotoAlbumPosts = () => API.get('/posts/photo-album')
export const getNoticePosts = () => API.get('/posts/notice')
export const getBuySellPosts = () => API.get('/posts/buy-sell')
export const fetchPosts = () => API.get('/posts')