import React, { Component } from 'react';
import Button from '../reuseble/button/Button';

export default class BtnSection extends Component {
    render() {
        return(
            <div className='btn-group'>
                <Button name='Color' className='button'/>
                <Button name='Image' className='button'/>
                <Button name='Video' className='button'/>
            </div>

        )
    }
}