const config = require('./config/manish.js');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';
import Example from './components/Example';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Link to={config.url.path}>Home</Link>
                        <Link to={config.url.path+'blog'}>Blogs</Link>
                        <Route path={config.url.path} exact component={Example}></Route>
                        <Route path={config.url.path+'blog'} exact component={Blog}></Route>
                        <Route path={config.url.path+'blog/:id'} exact render={props=> <BlogArticle{...props} />}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
