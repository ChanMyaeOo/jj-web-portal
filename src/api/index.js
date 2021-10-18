import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const createPost = (newPost) => API.post('/posts', newPost);
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const getLivingLocationPosts = () => API.get('/posts/living-location')
export const getPhotoAlbumPosts = () => API.get('/posts/photo-album')
export const getPhotoAlbumLatestPosts = () => API.get('/posts/photo-album-latest')
export const getNoticePosts = () => API.get('/posts/notice')
export const getNoticeLatestPosts = () => API.get('/posts/notice-latest')
export const getBuySellPosts = () => API.get('/posts/buy-sell')
export const getBuySellLatestPosts = () => API.get('/posts/buy-sell-latest')
export const getJobSearchPosts = () => API.get('/posts/job-search')
export const getJobSearchLatestPosts = () => API.get('/posts/job-search-latest')
export const fetchPosts = () => API.get('/posts')
export const getLatestPosts = () => API.get('/posts/latestPosts')