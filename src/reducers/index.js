import { combineReducers } from 'redux';
import posts from './posts'
import data from './data'

export const reducers = combineReducers({ posts, data });