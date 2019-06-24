import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Login , Main} from 'pages';


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Route exact path="/" component={Home}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Main" component={Main}/>
            </div>
        );
    }
}

export default App;