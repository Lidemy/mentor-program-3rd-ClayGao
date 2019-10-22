import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

class PostList extends Component {
 
    componentDidMount() {
        this.props.getPostList()
    }
    
    render(){
        const {history, isLoadingGetPosts, postListData} = this.props
        return (
            <div className="board">
            <div className="page-title">
                Articles
            </div>
            {isLoadingGetPosts ? 
            <div className="loading">
                Loading... 
            </div>:
            postListData.map(card => (
                <div key={card.id} 
                    className="post" 
                    onClick={() => { 
                        history.push('/list/' + card.id)
                    }}>
                    <div className="post-title">
                        {card.title}
                    </div>
                    <ReactMarkdown 
                        className="post-text" 
                        source={card.body} 
                    />
                    <div className="post-editor">
                        Author: {card.author ? card.author : "Noname"}
                    </div>
                </div>
            ))}
            </div>
        )
    }
 }


export default PostList