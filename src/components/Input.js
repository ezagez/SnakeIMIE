import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

handleChange(e){
  console.log(e.target.value, this.props.name)
}

  render() {
    return (
      <input type="text" onChange={this.handleChange} />
    )
  }
}

export default Input
