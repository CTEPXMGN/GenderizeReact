import React from 'react'
import Input from './input';

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