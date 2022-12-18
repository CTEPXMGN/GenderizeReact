import React from 'react'
import './button.css'

export default class Button extends React.Component {

    render() {
        return (
            <button 
            className="result" 
            type="submit" 
            onClick={this.handleClick}>Submit!</button>
        )
    }
}