import React, { Component } from 'react';
import { Accordion,  AccordionItem,  AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import BtnSection from '../SectionBtn/BtnSection';
import SectionWithBgImage from '../SectionWithBgImage/SectionWithBgImage';
import './main.css'
import './accordion.css';
import Checkbox from '../reuseble/checkbox/Checkbox';
import ColorPicker from '../reuseble/ColorPicker/ColorPicker';
import 'react-accessible-accordion/dist/fancy-example.css';
import Icon from '../reuseble/icon/Icon';
import Radio from '../reuseble/Radio/Radio';

export default class Main extends Component {
    render() {
        return(
            <section className='main'>
                <BtnSection/>
                <SectionWithBgImage/>
                <Accordion>
                    <AccordionItem className='scrollEffects'>
                        <AccordionItemTitle>
                            <Checkbox/>
                            <span> scroll effects</span>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <Radio/>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem className='colorOverlay'>
                        <AccordionItemTitle>
                            <Checkbox/>
                            <span> color overlay</span>
                        </AccordionItemTitle>
                        <AccordionItemBody className='color-container'>
                            <p>Solid</p>
                            <ColorPicker/>
                            <p> Gradient</p>
                            <ColorPicker/>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem className='filters'>
                        <AccordionItemTitle>
                            <Checkbox/>
                            <span> filters</span>
                        </AccordionItemTitle>
                        <AccordionItemBody className='icon-container'>
                            <Icon caption='B&W'/>
                            <Icon caption='Darken'/>
                            <Icon caption='Blurry'/>
                            <Icon caption='Lighten'/>
                            <Icon caption='Radiance'/>
                            <Icon caption='Bloom'/>
                            <Icon caption='Sepia'/>
                            <Icon caption='Tint'/>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem className='colorBehindImage'>
                        <AccordionItemTitle>
                            <Checkbox/>
                            <span> color behind image</span>
                        </AccordionItemTitle>
                        <AccordionItemBody className='color-container'>
                            <p>Solid</p>
                            <ColorPicker/>
                            <p> Gradient</p>
                            <ColorPicker/>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>
            </section>
        )
    }
}