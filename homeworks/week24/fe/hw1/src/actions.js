import * as actionTypes from './actionsTypes'
import * as WebAPI from './WebAPI'

// Action creator
export const getPostList = () => ({
    type: actionTypes.GET_POSTS,
    payload: WebAPI.getPosts()
})

export const getRecentPosts = () => ({
    type: actionTypes.GET_RECENT_POSTS,
    payload: WebAPI.getRecentPosts()
})

export const getSinglePost = (postId) => ({
    type: actionTypes.GET_SINGLE_POST,
    payload: WebAPI.getSinglePost(postId)
})

export const createSinglePost = (data) => ({
    type: actionTypes.CREATE_SINGLE_POST,
    payload: WebAPI.createSinglePost(data)
})

export const deleteSinglePost = (postId) => ({
    type: actionTypes.DELETE_SINGLE_POST,
    payload: WebAPI.deleteSinglePost(postId)
})

export const beginEditSinglePost = (title, body) => ({
    type: actionTypes.BEGIN_EDIT_SINGLE_POST,
    title,
    body
})

export const editSinglePost = (postId, title, body) => ({
    type: actionTypes.EDIT_SINGLE_POST,
    payload: WebAPI.editSinglePost(postId, title, body)
})


export const getWeatherData = () => ({
    type: actionTypes.GET_WEATHER_DATA,
    payload: WebAPI.getWeather()
})


