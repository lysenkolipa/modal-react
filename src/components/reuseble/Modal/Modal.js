import React, { Component } from 'react';
import './modal.css'
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Main from "../../Main/Main";



export default class Modal extends Component {
    render() {
        return (
            <section className='modal'>
                <Header/>
                <Main/>
                <Footer/>
            </section>
        )
    }
}