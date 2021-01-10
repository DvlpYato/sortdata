import React from 'react'
class HelloApp extends React.Component {
  render() {
    return (
        <div>
            <h1>React</h1>
            <p>{this.props.message}</p>
        </div>
    )
  }
}
export default HelloApp;