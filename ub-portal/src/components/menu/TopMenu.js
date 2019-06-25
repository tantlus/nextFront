import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';

class TopMenu extends Component {
    render() {

        const activeStyle = {
            color: 'green',
            fontSize: '1rem'
        };

        return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink to="/Sample" activeStyle={activeStyle}>Sample</NavLink></li>
            </ul>
        </div>
        );
    }
}

export default TopMenu;
