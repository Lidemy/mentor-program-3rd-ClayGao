import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { getRecentPosts } from '../WebAPI'
import Home from '../components/home'
import * as actions from '../actions'
import { connect } from 'react-redux'

const HomeContainer = props => {
    return <Home {...props} />
}

const mapStateToProps = state => {
    return {
        postListData: state.getPostsReducer.postListData,
        weatherData: state.getWeatherReducer.weatherData,
        isLoadingGetWeatherData: state.getWeatherReducer.isLoadingGetWeatherData
    }
}

const mapDispatchToProps = dispatch => {
    return {             
        getPostList: () => {
            dispatch(actions.getPosts())
            getRecentPosts().then(resp => {
                dispatch(actions.getPostsSuccess(resp.data))
            })
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer))