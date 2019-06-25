import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main">
         <div className="top">
            <div>
                <h1><Link to="/">로고</Link></h1>
            </div>
        </div>
         <div className="contents">
            <section>
                <h2>
                    컨텐츠
                </h2>
            </section>
        </div>
        </div>
    );
};

export default Main;