import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import Home from '../components/home'
import { getRecentPosts } from '../actions'
import { connect } from 'react-redux'

const HomeContainer = props => {
    return <Home {...props} />
}

const mapStateToProps = state => {
    return {
        postListData: state.getPostsReducer.postListData,
        weatherData: state.getWeatherReducer.weatherData
    }
}

const mapDispatchToProps = {         
    getRecentPosts
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer))