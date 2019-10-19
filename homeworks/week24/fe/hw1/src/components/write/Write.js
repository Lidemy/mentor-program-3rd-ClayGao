import React, {Component} from 'react';
import { getPosts, sendSinglePost } from '../../WebAPI'
import { DebounceInput } from 'react-debounce-input';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Write extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            author:'',
            body:''
        }
    }
 

    handlePostArticle = () => {
        const { history } = this.props
        const data = this.state 
        if (!data.title || !data.author || !data.body) {
            alert('Write Something :(') 
            return
        }
        sendSinglePost(data)
        .then(
            this.setState({
                title:'',
                author:'',
                body:''
            },
            history.push('/list'),
            getPosts().then(
                alert('Push Success! :D') // 這邊應該直接使用 react-router 的導向，這是偷懶的寫法
            ))   
        ).catch(error =>{
            alert('Failed to post, connect admin please :)')
        })
    }
    

    handleInput = (e) => {
        const inputType = e.target.className
            if(inputType === "write-article-title") {
                this.setState({title: e.target.value})
            } else if (inputType === "write-article-editor") {
                this.setState({author: e.target.value})
            } else {
                this.setState({body: e.target.value})
            }
    }
    
    render(){
        const {title, author, body} = this.state
        const {history} = this.props
        return (
            <div  className="board">
                <div className="page-title">
                    Write Something :D
                </div>
                <form className="write-article">
                    Title: <DebounceInput element="input" debounceTimeout={1000} onChange={this.handleInput} placeholder="Enter your title..." type="text" className="write-article-title" value={title} />
                    Your name: <DebounceInput element="input" debounceTimeout={1000} onChange={this.handleInput} placeholder="Enter your name..." type="text" className="write-article-editor" value={author} />
                    Content:　<DebounceInput element="textarea" debounceTimeout={800} onChange={this.handleInput} placeholder="Enter something..." className="write-article-text" value={body} />
                    <input className="write-article-button" type="button" onClick={this.handlePostArticle} value="Send" />
                </form>
            </div>
        )
    }
}

export default Write