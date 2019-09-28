import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown'

const About = () => {
    return ( 
         <div  className="board">
            <div className="page-title">
                About Blog
            </div>
             <div className="single-post">
                 <ReactMarkdown className="single-post-text" source="
                    ## Markdown 語法
                      目前 Markdown 語法還有一些小 Bug 未解，比如說有些字元 (如<ul>) 不能被 render
                    ## <Switch>
                      這是目前使用 React-router 還沒碰觸的一塊，有時間需要加緊研究
                    ## Blog 待改進的地方
                      比如說按下發文按鈕之後可以有動畫跳回 /list，這應該也是可以實作的部分
                 " />
                 <div className="single-post-editor">
                        Author: Clay Gao
                 </div>
             </div>
         </div>
     )
  }


export default About