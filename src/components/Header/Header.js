import React, { Component } from 'react';
import './header.css'
import glamorous from 'glamorous';
import Tabs from '../reuseble/tab/Tabs';

export default class Header extends Component {
    render() {
        return (
            <section className = 'modal-header'>
                <h3 className='modal-header__text'> Block settings
                    <button className='btn-close' type='button'>
                        <svg  version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" y1="16"
                                  x2="16" y2="1"
                                  stroke="black"
                                  strokeWidth="2"/>
                            <line x1="1" y1="1"
                                  x2="16" y2="16"
                                  stroke="black"
                                  strokeWidth="2"/>
                        </svg>
                    </button>
                </h3>
                <Tabs activeTab={{id: 'layout'}} className='modal-header__tabs'>
                    <Tabs.Tab id='layout' title='Layout'>
                        <glamorous.Div/>
                    </Tabs.Tab>
                    <Tabs.Tab id='background' title='Background'>
                        <glamorous.Div/>
                    </Tabs.Tab>
                </Tabs>
            </section>
        )
    }
}