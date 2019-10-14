import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getPosts, getSinglePost, deleteSinglePost, editSinglePost } from '../WebAPI'
import Post from '../components/post'
import * as actions from '../actions'

const PostContainer = props => {
    return <Post {...props} />
}

const mapStateToProps = state => {
    return {
        isDeleted: state.editSinglePostReducer.isDeleted,
        isLoadingSinglePost: state.getSinglePostReducer.isLoadingSinglePost,
        singlePostData: state.getSinglePostReducer.singlePostData,
        isEditing: state.editSinglePostReducer.isEditing,
        title: state.editSinglePostReducer.title,
        body: state.editSinglePostReducer.body
    }
}

const mapDispatchToProps = dispatch => {
    return {             
        getActiveSinglePost: (postId) => {
            dispatch(actions.getSinglePost())
            getSinglePost(postId).then(resp => {
                dispatch(actions.getSinglePostSuccess(resp.data))
            })
        },
        deleteActiveSinglePost: (postId) => {
            dispatch(actions.deleteSinglePost())
            deleteSinglePost(postId)
            getPosts().then(resp => {
                dispatch(actions.deleteSinglePostSuccess())
                window.history.back()
                alert('Delete Success!') 
            })     
        },
        editActiveSinglePost: (title, body) => {
            dispatch(actions.editSinglePost(title, body))
        },
        completeEditActiveSinglePost: (postId, title, body) => {
            if(!title || !body) return alert('不可空白唷!')
            editSinglePost(postId, title, body).then(resp => {
                getSinglePost(postId).then(resp => {
                    dispatch(actions.getSinglePostSuccess(resp.data)) // 刷新頁面
                })
                dispatch(actions.editSinglePostSuccess())
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)