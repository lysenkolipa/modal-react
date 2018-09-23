import React, { Component } from 'react';
import Button from '../reuseble/button/Button';
import '../reuseble/button/button.css';
import './sectionWithBgImage.css'

export default class SectionWithBgImage extends Component {
    render() {
        return(
            <section className='sectionWithBgImage'>
                <Button name='Upload' className='button btn-upload'/>
                <Button name='Gallery' className='button btn-gallery'/>
            </section>
        )
    }
}