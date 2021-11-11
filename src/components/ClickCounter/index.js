// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  Increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="h1">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="pElement">Click the button to increase the count!</p>
        <button className="button" onClick={this.Increment}>
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
