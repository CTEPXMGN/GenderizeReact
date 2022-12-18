import React from 'react'
import "./input.css"

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <input 
        className='name' 
        type="text" 
        placeholder='Input name...'
        onChange={this.props.onChange} />
      )
    }
  }