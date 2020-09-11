import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    <Router>
        <Route exact path="/">
            <Redirect to="/index"/>
        </Route>
        <Route path={["/index", "/:id"]} component={App}/>
    </Router>,
    document.getElementById('root')
);
