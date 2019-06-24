import React from 'react';
import { Link } from 'react-router-dom';
import './SassComponent.scss';

const SassComponent = () => {
  return (
    <React.Fragment>
        <div className="SassComponent">
            <div className="box red" />
            <div className="box orange" />
            <div className="box yellow" />
            <div className="box green" />
            <div className="box blue" />
            <div className="box indigo" />
            <div className="box violet" />
        </div>
        <ul>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Main">Main</Link></li>
        </ul>
    </React.Fragment>
  );
};

export default SassComponent;