import React from 'react';
import { connect } from 'react-redux'
import Post from '../components/post'
import { getSinglePost, deleteSinglePost, beginEditSinglePost, editSinglePost } from '../actions'

const PostContainer = props => {
    return <Post {...props} />
}

const mapStateToProps = state => {
    return {
        isEdited: state.editSinglePostReducer.isEdited,
        isDeleted: state.editSinglePostReducer.isDeleted,
        isLoadingSinglePost: state.getSinglePostReducer.isLoadingSinglePost,
        singlePostData: state.getSinglePostReducer.singlePostData,
        isEditing: state.editSinglePostReducer.isEditing,
        title: state.editSinglePostReducer.title,
        body: state.editSinglePostReducer.body
    }
}

const mapDispatchToProps = {      
    getSinglePost,
    deleteSinglePost,
    beginEditSinglePost,
    editSinglePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)