import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postListData: [], 
        }
    }
 
    handlePostListData = () => {
        const url = 'https://qootest.com/posts'
        axios.get(url)
            .then(resp => {
                this.setState({
                    postListData: resp.data.slice(resp.data.length - 9, resp.data.length).reverse()
                })
            })
    }
 
    componentDidMount() {
        this.handlePostListData()
    }
    
    render(){
        const {postListData} = this.state
        const {history} = this.props
        return (
            <div>
                <div  className="board">
                    <div className="page-title">
                        About me
                    </div>
                    <div className="single-post" >        
                        <div className="single-post-text">
                            Hi, I am Clay 
                            <br />
                            I am Learing Web Frontend Develope and try to bulid my Blog with React and React-router
                            <br />
                            Maybe it looks ugly Orz.... but everything will be alright, doesn't it ?
                            <br />
                            By the way, the blog now you see won't be the latest version 
                            <br />
                            I will update week by week
                            <br />
                            So, give me some time
                            <br />
                            See you :D
                            <br />
                            Xin Yi Liu go to eat the SHIT :D
                        </div>
                        <div className="single-post-editor">
                            Author: ClayGao
                        </div>
                    </div>
                    <div className="page-title">
                        The Latest Articles
                    </div>
                    {postListData.map(card => (
                        <div key={card.id} 
                            className="post" 
                            onClick={() => { 
                                history.push('/list/id=' + card.id)
                            }}>
                            <div className="post-title">
                                {card.title}
                            </div>
                            <div className="post-text" >
                            {card.body}
                            </div>
                            <div className="post-editor">
                                Author: {card.author ? card.author : "Noname"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
 }


export default withRouter(Home) 