import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './views/index';
import CreateHouse from './views/create';
import HousesList from './views/list';
import HouseDetails from './views/details';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/create" component={CreateHouse} />
    <Route path="/list" component={HousesList} />
    <Route path="/house/:id" component={HouseDetails} />
  </Switch>
);
