import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../containers/Layout';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/">
          <h1>Landing</h1>
        </Route>
        <Route path="/items">
          <h1>results</h1>
        </Route>
        <Route exact path="/items/:id">
          <h1>Details</h1>
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
