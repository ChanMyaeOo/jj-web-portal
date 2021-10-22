import { combineReducers } from 'redux';
import posts from './posts'
import data from './data'
import auth from './auth';
export const reducers = combineReducers({ posts, data, auth });