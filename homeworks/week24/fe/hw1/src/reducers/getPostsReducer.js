import * as actionTypes from '../actionsTypes';

const initState = {
    postListData: [],
    isLoadingGetPosts: false
}

export default function getPostsReducer(state = initState, action) {
    switch(action.type) {
        case actionTypes.GET_POSTS + '_PENDING':
            return {
                ...state,
                isLoadingGetPosts: true,
            }
        case actionTypes.GET_POSTS + '_FULFILLED' :
            return {
                ...state,
                postListData: action.payload.data,
                isLoadingGetPosts: false  
            }
        case actionTypes.GET_RECENT_POSTS + '_PENDING':
            return {
                ...state,
                isLoadingGetPosts: true,
            }
        case actionTypes.GET_RECENT_POSTS + '_FULFILLED' :
            return {
                ...state,
                postListData: action.payload.data,
                isLoadingGetPosts: false  
            }
        default:
            return state
    }
}