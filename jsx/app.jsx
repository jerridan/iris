import './../less/index.less';

import React from 'react';
import Router from 'react-router';
import Iris from './components/iris.jsx';

var Route = Router.Route;
var routes = <Route name="app" path="/" handler={Iris}/>;

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});