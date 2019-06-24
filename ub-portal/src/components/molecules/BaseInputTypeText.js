import React, { Component }  from 'react';
import InputTypeText from "components/atoms/InputTypeText";

import 'resource/styles/molecules/BaseInputTypeText.scss';

class BaseInputTypeText extends Component {
    render() {
        return (
            <div className={this.props.className}>
            <label htmlFor={this.props.id}>{this.props.text}</label>
                <InputTypeText id={this.props.id} name={this.props.id} placeholder={this.props.text}/>
            </div>
        );
    }
}

export default BaseInputTypeText;
