import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeList from './components/EmployeeList';
import Navigation from './components/Navigation';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navigation />
                </header>
                <main className="App-content">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/employees" component={EmployeeList} />
                    </Switch>
                </main>
                <footer className="App-footer">
                    Created by Valunchanut Simaroj
                </footer>
            </div>
        </Router>
    );
}

export default App;
