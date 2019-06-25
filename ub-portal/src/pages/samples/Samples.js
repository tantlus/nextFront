import React from 'react';
import {Link , Route} from 'react-router-dom';
import Sample from 'pages/samples/Sample';

const Samples = () => {
    return (
        <div>
            <h1>Sample 입니다.</h1>
            <ul>
                <li><Link to="/Sample/A">A</Link></li>
                <li><Link to="/Sample/B">B</Link></li>
                <li><Link to="/Sample/C">C</Link></li>
            </ul>
            <Route 
                path="/Sample/:title" component={Sample}
            />
        </div>
    );
};

export default Samples;