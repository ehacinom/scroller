import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import components
import Root from './react/Root';
import Home from './react/Home';
import Login from './react/Login';
import Signup from './react/Signup';

// import redux action dispatchers



/* -----------------    COMPONENT     ------------------ */

const Routes = ({  }) => (
    <Router history={browserHistory}>
        <Route path="/" component={Root} >
            <IndexRoute component={Home} />
            <Route path="login" component={Login} />
            <Route path="signup" component={Signup} />
        </Route>
    </Router>
);



/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null
// dispatcher will do onEnters like fetching initial data sent to Routes
// const mapDispatch = dispatch => ({});

export default connect(mapProps, mapDispatch)(Routes);



