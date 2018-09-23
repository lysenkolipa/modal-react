import React, { Component } from 'react';
import './colorInput.css'

export default class ColorInput extends Component {
    render() {
        return(
            <div className={this.props.className} style={{backgroundColor:this.props.color}}/>

        )
    }
}