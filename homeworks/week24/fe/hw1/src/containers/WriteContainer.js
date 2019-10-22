import React from 'react';
import { connect } from 'react-redux'
import Write from '../components/write'
import { createSinglePost } from '../actions'

const WriteContainer = props => {
    return <Write {...props} />
}

const mapStateToProps = state => {
    return {
        isCreated: state.createSinglePostReducer.isCreated
    }
}

const mapDispatchToProps = {           
    createSinglePost
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteContainer)