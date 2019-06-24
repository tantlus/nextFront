import React, { Component }  from 'react';
import InputTypePassword from "components/atoms/InputTypePassword";

import 'resource/styles/molecules/BaseInputTypePassword.scss';

class BaseInputTypePassword extends Component {
    render() {
        return (
            <div className={this.props.className}>
            <label htmlFor={this.props.id}>{this.props.text}</label>
                <InputTypePassword id={this.props.id} name={this.props.id} placeholder={this.props.text}/>
            </div>
        );
    }
}

export default BaseInputTypePassword;
