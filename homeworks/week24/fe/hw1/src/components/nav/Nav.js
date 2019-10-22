import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import shallowEqual from 'shallowequal'

const DateInfo = ({currentWeather, currentTime}) => {
  return (
    <span  className="date-info">
    {currentWeather.map(data=>(
      <React.Fragment>
        <li>{currentTime.toDateString()}</li>
        <li>T: {(Number(data.MinT)+Number(data.MaxT))/2}°C</li>
        <li>Rain: {data.PoP}%</li>
      </React.Fragment>
    ))}
    </span>
  )
}

const Tab = ({ label, to, exact }) => {
    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <li className={match ? "active" : ""}>
            <Link className="link" to={to}>{label}</Link>
          </li>
        )}
      />
    )
  }

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isMove: 0
        }
    }

    scroll = () => {
        this.setState({
          isMove : window.scrollY
        })
    }
  
    
    shouldComponentUpdate(nextProps, nextState){
      return !shallowEqual(this.state.isMove, nextState.isMove)
    }
    
    componentWillUnmount(){
      window.removeEventListener("scroll", this.scroll);
    }

    componentDidMount() {
      window.addEventListener("scroll", this.scroll);
      this.props.getWeatherData()
    }

    render(){
      const currentTime = new Date()
      const {isMove} = this.state
      const {weatherData} = this.props
      const currentWeather = weatherData.filter(data => (
        currentTime.getHours() >= 12 && currentTime.getHours() < 18) ? 
        data.time ===  '今早' :  data.time ===  '今晚'
      )
      return (
        <nav className={isMove ? "window-is-moving" : "window-unmoving"}>
            <ul>
                <Tab exact={true} to="/" label="Home" />
                <Tab to="/about" label="About" />
                <Tab to="/list" label="List" />
                <Tab to="/write" label="Write" />
                <DateInfo currentWeather={currentWeather} currentTime={currentTime}/>
            </ul>
        </nav>
      )
  }
}


export default Nav








