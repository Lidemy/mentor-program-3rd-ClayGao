import { combineReducers } from 'redux';
import getPostsReducer from './getPostsReducer'
import  getWeatherReducer from './getWeatherReducer'
import { getSinglePostReducer, editSinglePostReducer, createSinglePostReducer} from './getSinglePostReducer'

const blogApp = combineReducers({
    getPostsReducer,
    getSinglePostReducer,
    editSinglePostReducer,
    getWeatherReducer,
    createSinglePostReducer
});

export default blogApp;