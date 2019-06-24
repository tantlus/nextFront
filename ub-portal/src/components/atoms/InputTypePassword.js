import React, { Component }  from 'react';
import PropTypes from 'prop-types'

import 'resource/styles/atoms/InputTypePassword.scss';

class InputTypePassword extends Component {
    render() {
        return (
            <span className="inputtext" >
                <input type="password" id={this.props.id} name={this.props.name}  className="ub-control input-text" placeholder={this.props.placeholder} />
            </span>
        );
    }
}

InputTypePassword.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

InputTypePassword.defaultProps = {
    id: '',
    name: '',
    placeholder: ''
};



export default InputTypePassword;