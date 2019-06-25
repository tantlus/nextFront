import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import  Home  from 'pages/Home';
import Samples from 'pages/samples/Samples';

import Header from 'components/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/Sample" component={Samples}/>
            </div>
        );
    }
}

export default App;