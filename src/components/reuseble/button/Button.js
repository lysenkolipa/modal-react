import React, { Component } from 'react';
import './button.css'

export default class Button extends Component {
    render() {
        return(
            <button className={this.props.className}>{this.props.name}</button>
        )
    }
}