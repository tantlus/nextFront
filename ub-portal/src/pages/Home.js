import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <ul>
                <li><Link to="/Main">Main</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </div>
    );
};

export default Home;