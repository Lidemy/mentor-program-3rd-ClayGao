import { combineReducers } from 'redux';
import getPostsReducer from './getPostsReducer'
import  getWeatherReducer from './getWeatherReducer'
import { getSinglePostReducer, editSinglePostReducer, } from './getSinglePostReducer'

const blogApp = combineReducers({
    getPostsReducer,
    getSinglePostReducer,
    editSinglePostReducer,
    getWeatherReducer
});

export default blogApp;