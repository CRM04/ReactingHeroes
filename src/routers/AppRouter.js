import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import loginScreen from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    {/* <Route path="/login" exact component={loginScreen}></Route> */}
                    {/* <Route path="/" component={DashboardRoutes}></Route> */}
                    <PublicRoute  path='/login' component={loginScreen} isAuth={user.logged}></PublicRoute>
                    <PrivateRoute path='/' component={DashboardRoutes} isAuth={user.logged}></PrivateRoute>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
