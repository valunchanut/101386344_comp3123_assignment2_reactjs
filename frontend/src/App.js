import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeList from './components/EmployeeList';
import Navigation from './components/Navigation';

function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/employees" component={EmployeeList} />
            </Switch>
        </Router>
    );
}

export default App;
