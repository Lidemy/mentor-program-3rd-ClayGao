import React, {Component,} from 'react';
import './scss/App.scss';
import Nav from './containers/NavContainer'
import PostList from './containers/PostListContainer'
import Post from './containers/PostContainer'
import About from './components/about'
import Write from './components/write'
import Home from './containers/HomeContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
      super(props)
  }

  render() {
      return (
        <Router basename="/week24-fe/my-app/build">
          <div className="App">
              <Nav />
              <div className="wrapper"> 
              <Switch> 
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/list" exact component={PostList} />
                  <Route path="/list/:listId" component={Post} />
                  <Route path="/write" exact component={Write} /> 
              </Switch>
              </div>
          </div>
        </Router>
      )
  }
}

export default App;
