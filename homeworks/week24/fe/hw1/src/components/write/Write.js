import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';

class Write extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            author:'',
            body:''
        }
    }

    componentDidUpdate(prevProps) {
        const { history, isCreated } = this.props
        if(isCreated !== prevProps.isCreated && !isCreated) {
            history.push('/list')
        }
    }
 

    handlePostArticle = () => {
        const data = this.state 
        this.props.createSinglePost(data)
        this.setState({
            title:'',
            author:'',
            body:''
        })
    }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        const {title, author, body} = this.state
        return (
            <div  className="board">
                <div className="page-title">
                    Write Something :D
                </div>
                <form className="write-article">
                    Title: <DebounceInput 
                            element="input" 
                            name="title"
                            autoComplete="off"
                            debounceTimeout={1000} 
                            onChange={this.handleInput} 
                            placeholder="Enter your title..." 
                            type="text" 
                            className="write-article-title" 
                            value={title} />
                    Your name: <DebounceInput 
                                element="input" 
                                name="author"
                                autoComplete="off"
                                debounceTimeout={1000} 
                                onChange={this.handleInput} 
                                placeholder="Enter your name..." 
                                type="text" 
                                className="write-article-editor" 
                                value={author} />
                    Content:　<DebounceInput 
                                name="body"
                                element="textarea" 
                                debounceTimeout={800} 
                                onChange={this.handleInput} 
                                placeholder="Enter something..." 
                                className="write-article-text" 
                                value={body} />
                    <input className="write-article-button" type="button" onClick={this.handlePostArticle} value="Send" />
                </form>
            </div>
        )
    }
}

export default Write