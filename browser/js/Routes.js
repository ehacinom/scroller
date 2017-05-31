import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import components


// import redux action dispatchers



/* -----------------    COMPONENT     ------------------ */

const Routes = ({  }) => (
    <Router history={browserHistory}>
        <Route path="/" component={Root} >
            <IndexRoute component={Home} />
            <Route path="login" component={Login} />
            <Route path="signup" component={Signup} />
            <Route path="users" component={UserList} />
            <Route path="users/:userId" component={UserDetail} />
        </Route>
    </Router>
);


/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

// dispatcher will do onEnters like fetching initial data sent to Routes
const mapDispatch = dispatch => ({});

export default connect(mapProps, mapDispatch)(Routes);



