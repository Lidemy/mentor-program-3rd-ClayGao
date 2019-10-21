import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

class Home extends Component {
 
    componentDidMount() {
        this.props.getRecentPosts()
    }
    
    render(){
        const {history, postListData, weatherData} = this.props
        return (
            <div>
                <div  className="board">
                    <div className="page-title">
                        Today  Weather
                    </div>
                    <div className="weather" > 
                            {weatherData.map(data => (
                                <div className="weather-card"> 
                                    <h1>{data.time}</h1>
                                    <p>Weather: {data.Wx}</p>
                                    <p>Feel: {data.CI}</p>
                                    <p>Max Temp: {data.MaxT}°C</p>
                                    <p>Min Temp: {data.MinT}°C</p>
                                    <p>Rain: {data.PoP}%</p>
                                </div>
                            ))}
                    </div>
                    <div className="page-title">
                        The  Latest  Articles
                    </div>
                    {postListData.map(card => (
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
                    <div className="page-title">
                        About  Me
                    </div>
                    <div className="info-page" >        
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
                </div>
            </div>
        )
    }
 }


export default Home 