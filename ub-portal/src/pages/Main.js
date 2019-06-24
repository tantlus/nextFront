import React from 'react';
import 'resource/css/main.css';

import ContentsTop from './ContentsTop';
import ContentsBody from './ContentsBody';


const Main = () => {
    return (
        <React.Fragment>
            <ContentsTop></ContentsTop>
            <ContentsBody></ContentsBody>
        </React.Fragment>
    );
};

export default Main;