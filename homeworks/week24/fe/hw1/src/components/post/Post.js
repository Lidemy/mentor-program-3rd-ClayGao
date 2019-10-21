import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from "../../CodeBlock";

class Post extends Component {
    
    componentDidMount() {
        const postId = this.props.match.params.listId
        this.props.getSinglePost(postId)
    }

    componentDidUpdate(prevProps) {
        const postId = this.props.match.params.listId
        const { isDeleted, isEdited, history } = this.props
        if (isDeleted !== prevProps.isDeleted && !isDeleted) {
            history.push('/list')
        }
        if (isEdited !== prevProps.isEdited && !isEdited) {
            this.props.getSinglePost(postId)
            window.scrollTo(0, 0) // 回到頁面頂端
        }
    }
    
    render(){
        const postId = this.props.match.params.listId
        const { singlePostData, 
                isLoadingSinglePost, 
                deleteSinglePost, 
                beginEditSinglePost, 
                editSinglePost, 
                title,
                isEditing,
                body} = this.props
        return (
            <div className="board">
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
                                beginEditSinglePost(singlePostData.title, singlePostData.body) 
                                }}>Edit</span>
                        <span className="single-post-editblock-delete" 
                            onClick={() => { 
                                deleteSinglePost(postId)
                                }}>Delete</span>
                    </div>
                    </>
                    :
                    <>
                    <form className="edit-article">
                        <input className="edit-article-title" type="text"  defaultValue={singlePostData.title} onChange={(e) => {beginEditSinglePost(e.target.value, body)}}/>
                        <textarea className="edit-article-text" defaultValue={singlePostData.body} onChange={(e) => {beginEditSinglePost(title, e.target.value)}}/>
                        <input className="edit-article-button" type="button" value="Send" onClick={()=>{ editSinglePost(postId, title, body)}} />
                    </form>
                    <div className="single-post-editor">
                        {"Author: " + (singlePostData.author || "Noname")}
                    </div>
                    </>
                    }       
                </div>
            </div>
        )
    }
 }


export default Post