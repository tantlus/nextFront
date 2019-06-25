import React from 'react';
import {Link , Route} from 'react-router-dom';
import Sample from 'pages/samples/Sample';

import './Main.scss';

const Main = () => {
      
    return (
        <div>
                <div className="ui large top fixed hidden menu">
                <div className="ui container">
                    <Link to="/Main/A" className="active item">Home</Link>
                    <Link to="/Main/A" className="item">List</Link>
                    <Link to="/Main/A" className="item">Detail</Link>
                    <Link to="/Main/A" className="item">Register</Link>
                    <div className="right menu">
                    <div className="item">
                    <Link to="/Main/A" className="ui button">Log in</Link>
                    </div>
                    <div className="item">
                    <Link to="/Main/A" className="ui primary button">Sign Up</Link>
                    </div>
                    </div>
                </div>
                </div>

                <div className="ui vertical inverted sidebar menu">
                <Link to="/Main/A" className="active item">Home</Link>
                <Link to="/Main/A" className="item">List</Link>
                <Link to="/Main/A" className="item">Detail</Link>
                <Link to="/Main/A" className="item">Register</Link>
                <Link to="/Main/A" className="item">Login</Link>
                <Link to="/Main/A" className="item">Signup</Link>
                </div>

                <div className="pusher">
                <div className="ui inverted vertical masthead center aligned">
                    <div className="ui large inverted container menu">
                    <Link to="" className="toc item">
                        <i className="sidebar icon"></i>
                    </Link>
                    <Link to="/Main/Home" className="active item">Home</Link>
                    <Link to="/Main/List" className="item">List</Link>
                    <Link to="/Main/Detail" className="item">Detail</Link>
                    <Link to="/Main/Register" className="item">Register</Link>
                    <div className="right item">
                    <Link to="/Main/A" className="ui inverted button">Log in</Link>
                    <Link to="/Main/A" className="ui inverted button">Sign Up</Link>
                    </div>
                    </div>

                    <div className="ui text container"></div>
                </div>


                <main className="ui middle aligned stackable grid container">
                    <Route 
                        path="/Main/:title" component={Sample}
                    />
                </main>



                <div className="ui inverted vertical footer segment">
                    <div className="ui container">
                    <div className="ui stackable inverted divided equal height stackable grid">
                        <div className="three wide column">
                        <h4 className="ui inverted header">About</h4>
                        <div className="ui inverted link list">
                            <Link to="/Main/A" className="item">Sitemap</Link>
                            <Link to="/Main/A" className="item">Contact Us</Link>
                            <Link to="/Main/A" className="item">Religious Ceremonies</Link>
                            <Link to="/Main/A" className="item">Gazebo Plans</Link>
                        </div>
                        </div>
                        <div className="three wide column">
                        <h4 className="ui inverted header">Services</h4>
                        <div className="ui inverted link list">
                            <Link to="/Main/A" className="item">Banana Pre-Order</Link>
                            <Link to="/Main/A" className="item">DNA FAQ</Link>
                            <Link to="/Main/A" className="item">How To Access</Link>
                            <Link to="/Main/A" className="item">Favorite X-Men</Link>
                        </div>
                        </div>
                        <div className="seven wide column">
                        <h4 className="ui inverted header">Footer Header</h4>
                        <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Main;