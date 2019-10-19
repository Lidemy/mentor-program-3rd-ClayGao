import * as actionTypes from '../actionsTypes';

const initState = {
    singlePostData: [],
    isLoadingSinglePost: false,
}

const editingContent = {
    isEditing: false,
    isDeleted : false,
    title: '',
    body: ''
}

export function getSinglePostReducer(state = initState, action) {
    switch(action.type) {
        case actionTypes.GET_SINGLE_POST  + '_PENDING':
            return {
                ...state,
                isLoadingSinglePost: true,
            }
        case actionTypes.GET_SINGLE_POST + '_FULFILLED':
            return {
                ...state,
                singlePostData: action.payload.data,
                isLoadingSinglePost: false  
            }
        default:
            return state
    }
}

export function editSinglePostReducer(state = editingContent, action) {
    switch(action.type) {
        case actionTypes.BEGIN_EDIT_SINGLE_POST:
            return {
                ...state,
                isEditing: true,
                title: action.title,
                body: action.body
            }
        case actionTypes.EDIT_SINGLE_POST + '_PENDING':
            return {
                ...state,
                title: action.title,
                body: action.body 
            }
        case actionTypes.EDIT_SINGLE_POST + '_FULFILLED':
            return {
                ...state,
                isEditing: false,
            }
        case actionTypes.DELETE_SINGLE_POST  + '_PENDING':
            return {
                ...state,
                isDeleted: true,
            }
        case actionTypes.DELETE_SINGLE_POST + '_FULFILLED':
            return {
                ...state,
                isDeleted: false
            }
        default:
            return state
    }
}

