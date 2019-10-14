import * as actionTypes from '../actionsTypes';

const initState = {
    postListData: [],
    isLoadingGetPosts: false
}

export default function getPostsReducer(state = initState, action) {
    switch(action.type) {
        case actionTypes.GET_POSTS:
            return {
                ...state,
                isLoadingGetPosts: true,
            }
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                postListData: action.data,
                isLoadingGetPosts: false  
            }
        default:
            return state
    }
}