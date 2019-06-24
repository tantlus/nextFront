import React from 'react';
import { Link } from 'react-router-dom';

const TopContents = () => {
    return (
        <div className="ub-frame top">
            <div className="ub-layout header">
                <h1><Link to="/"><img src={require('resource/images/common/img_h1_logo.png')} alt="ubone 로고" /></Link></h1>
            </div>
            top
        </div>
    );
};

export default TopContents;