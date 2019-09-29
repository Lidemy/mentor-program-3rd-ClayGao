import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postData: [], 
        }
    }
 
    handlePostData = () => {
        const listId = this.props.match.params.listId
        const url = 'https://qootest.com/posts/' + listId
        axios.get(url)
            .then(resp => {
                this.setState({
                    postData: resp.data
                })
            })
    }

    componentDidMount() {
        this.handlePostData()
    }
    
    render(){
        const { postData } = this.state
        return (
            <div  className="board">
                <div key={postData.id} 
                    className="single-post" >        
                    <div className="single-post-title">
                        {postData.title}
                    </div>
                    <ReactMarkdown 
                        className="single-post-text" 
                        source={postData.body ? postData.body : "Loading..."} 
                    />
                    <div className="single-post-editor">
                        {"Author: " + (postData.author ? postData.author : "Noname")}
                    </div>
                </div>
            </div>
        )
    }
 }


export default Post