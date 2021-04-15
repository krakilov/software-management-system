import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {HomePage} from './pages/HomePage';
import {SignUpPage} from './pages/SignUpPage';
import {LogInPage} from './pages/LogInPage';
import {AccountPage} from './pages/AccountPage';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/account" component={AccountPage} exact />
                <Route path="/project/:title" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/signup" component={SignUpPage} exact />
            <Route path="/login" component={LogInPage} exact />
            <Route path="/account" component={AccountPage} exact />
        </Switch>
    );
}