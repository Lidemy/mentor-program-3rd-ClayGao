import React, {Component} from 'react';
import './scss/App.scss';
import Nav from './nav'
import PostList from './post_list'
import Post from './post'
import About from './about'
import Write from './write'
import Home from './home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          scrollY : window.scrollY
      }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.scroll);
  }
  
  scroll = () => {
      this.setState({
        scrollY : window.scrollY
      })
  }

  render() {
      const {scrollY} = this.state
      return (
        <Router basename="/week22/my-app/build">
          <div className="App">
              <Nav isMove={scrollY}/>
              <div className="wrapper"> 
              <Switch> 
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/list" exact component={PostList} />
                  <Route path="/list/id=:listId" component={Post} />
                  <Route path="/write" exact component={Write} /> 
              </Switch>
              </div>
          </div>
        </Router>
      )
  }
}

export default App;
