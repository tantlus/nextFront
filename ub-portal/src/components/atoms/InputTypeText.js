import React, { Component }  from 'react';
import PropTypes from 'prop-types'

import 'resource/styles/atoms/InputTypeText.scss';

class InputTypeText extends Component {
    render() {
        return (
            <span className="inputtext" >
                <input type="text" id={this.props.id} name={this.props.name} className="ub-control input-text" placeholder={this.props.placeholder} />
            </span>
        );
    }
}

InputTypeText.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

InputTypeText.defaultProps = {
    id: '',
    name: '',
    placeholder: ''
};

export default InputTypeText;