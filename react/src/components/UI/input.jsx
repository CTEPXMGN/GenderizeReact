import React from 'react'

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleInput(e) {
  //   e.preventDefault();
  //   console.log(e.target.value);
  // }

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