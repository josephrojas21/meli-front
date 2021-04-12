import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../containers/Layout';
import Items from '../containers/Items';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/">
          <h1>Landing</h1>
        </Route>
        <Route path="/items">
          <Items />
        </Route>
        <Route exact path="/items/:id">
          <h1>Details</h1>
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
