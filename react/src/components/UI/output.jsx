import React from 'react'

export default class Output extends React.Component {

    render() {
        return <p className="gender">{this.props.name} is {this.props.value}</p>;
    }
}