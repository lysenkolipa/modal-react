import React, { Component } from 'react';
import './colorPicker.css'
import ColorInput from "../colorInput/ColorInput";

export default class ColorPicker extends Component {
    render() {
        return(
            <section className='colorPicker'>
                <ColorInput className='colorInput' color='#fff'/>
                <ColorInput className='colorInput' color='#ee7b67'/>
                <ColorInput className='colorInput' color='#2195f4'/>
                <ColorInput className='colorInput' color='#d944fb'/>
                <ColorInput className='colorInput' color='#323435'/>
                <ColorInput className='colorInput colorInput-img' color='#ffffff' />
            </section>


        )
    }
}