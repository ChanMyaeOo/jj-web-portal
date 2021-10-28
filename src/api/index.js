import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// https://jj-web-portal.herokuapp.com/

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const createPost = (newPost) => API.post('/posts', newPost);
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const getLivingLocationPosts = () => API.get('/posts/living-location')
export const getPhotoAlbumPosts = () => API.get('/posts/photo-album')
export const getPhotoAlbumLatestPosts = () => API.get('/posts/photo-album-latest')
export const getNoticePosts = (page) => API.get(`/posts/notice?page=${page}`)
export const getNoticeLatestPosts = () => API.get('/posts/notice-latest')
export const getBuySellPosts = (page) => API.get(`/posts/buy-sell?page=${page}`)
export const getBuySellLatestPosts = () => API.get('/posts/buy-sell-latest')
export const getJobSearchPosts = () => API.get('/posts/job-search')
export const getJobSearchLatestPosts = () => API.get('/posts/job-search-latest')
export const fetchPosts = () => API.get('/posts')
export const getLatestPosts = () => API.get('/posts/latestPosts')