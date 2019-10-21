import { Component } from 'react'
import { withRouter } from 'react-router-dom'

/* 可以套用在每個需要換頁的部分 */

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          window.scrollTo(0, 0)
        }
    }
    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop);
