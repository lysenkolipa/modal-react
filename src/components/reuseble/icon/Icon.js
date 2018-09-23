import React, { Component } from 'react';
import './icon.css'


export default class Icon extends Component {
    render() {
        return(
            <figure className='icon'>
                <div className='img'/>
                <figcaption> {this.props.caption}</figcaption>
            </figure>

        )
    }
}