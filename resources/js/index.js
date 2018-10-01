const config = require('./config/manish.js');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';
import Example from './components/Example';

import Master from './components/Master';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';
import EditItem from './components/EditItem';

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
                        <Route path="/" component={Master} >
                            <Route path={config.url.path+"/add-item"} component={CreateItem} />
                            <Route path={config.url.path+"/display-item"} component={DisplayItem} />
                            <Route path={config.url.path+"/edit/:id"} component={EditItem} />
                        </Route>
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
