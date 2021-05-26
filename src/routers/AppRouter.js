import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import loginScreen from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" exact component={loginScreen}></Route>
                    <Route path="/" component={DashboardRoutes}></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
