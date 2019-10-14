import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from "../../CodeBlock";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Post extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const postId = this.props.match.params.listId
        this.props.getActiveSinglePost(postId)
    }
    
    render(){
        const postId = this.props.match.params.listId
        const { singlePostData, 
                isLoadingSinglePost, 
                deleteActiveSinglePost, 
                editActiveSinglePost, 
                completeEditActiveSinglePost, 
                isEditing,title,
                body,
                history } = this.props
        return (
            <div  className="board">
                <div key={singlePostData.id} 
                    className="single-post" > 
                    {!isEditing ? 
                    isLoadingSinglePost ? 
                    <div className="loading">
                        Loading... 
                    </div>
                    :
                    <>
                    <div className="single-post-title">
                        {singlePostData.title}
                    </div>
                    <ReactMarkdown 
                        className="single-post-text" 
                        renderers={{ code: CodeBlock }}
                        source={!isLoadingSinglePost ? singlePostData.body : "Loading..."} 
                    />
                    <div className="single-post-editor">
                        {"Author: " + (singlePostData.author || "Noname")}
                    </div>
                    <div className="single-post-editblock">
                        <span className="single-post-editblock-edit" 
                            onClick={() => { 
                                editActiveSinglePost(singlePostData.title, singlePostData.body) 
                                }}>Edit</span>
                        <span to="/list"
                            className="single-post-editblock-delete" 
                            onClick={() => { 
                                deleteActiveSinglePost(postId)
                                }}>Delete</span>
                    </div>
                    </>
                    :
                    <>
                    <form className="edit-article">
                        <input className="edit-article-title" type="text"  defaultValue={singlePostData.title} onChange={(e) => {editActiveSinglePost(e.target.value, body)}}/>
                        <textarea className="edit-article-text" defaultValue={singlePostData.body} onChange={(e) => {editActiveSinglePost(title, e.target.value)}}/>
                        <input className="edit-article-button" type="button" value="Send" onClick={()=>{ completeEditActiveSinglePost(postId, title, body)}} />
                    </form>
                    <div className="single-post-editor">
                        {"Author: " + (singlePostData.author ? singlePostData.author : "Noname")}
                    </div>
                    </>
                    }       
                </div>
            </div>
        )
    }
 }


export default Post