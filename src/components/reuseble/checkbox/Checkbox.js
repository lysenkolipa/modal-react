import React, { Component } from 'react';
import './checkbox.css'

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {isChecked:false}
    }

    toggleChange = () => {
        this.setState({ isChecked: !this.state.isChecked });
    };

    render() {
        return(
            <label className="el-switch">
                <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} name="switch"/>
                <span className="el-switch-style"/>
            </label>
        )
    }
}