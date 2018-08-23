import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './views/index';


export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Index} />
    </Switch>
);
