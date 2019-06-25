import React from 'react';
import TopMenu from 'components/menu/TopMenu'

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <TopMenu/>
        </div>
    );
};

export default Header;