import React, { Component } from 'react';
import './radio.css';

export default class Radio extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: ''
        };
        this.radioChange = this.radioChange.bind(this);
    }

    radioChange(event) {
        this.setState({ selectedOption: event.currentTarget.value });
    }

    render() {
        return (
            <div className='radio-group'>
                <label className='container'>
                    <input type='radio'
                           value='Fixed'
                           checked={this.state.selectedOption === 'Fixed'}
                           onChange={this.radioChange} className='checkmark'/>
                    <span className='checkmark'/>
                    Fixed
                </label>
                <label className='container'>
                    <input type='radio'
                           value='Parallax'
                           checked={this.state.selectedOption === 'Parallax'}
                           onChange={this.radioChange}/>
                    <span className='checkmark'/>
                    Parallax
                </label>
            </div>
        );
    }
}
