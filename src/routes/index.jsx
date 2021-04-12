import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../containers/Layout';
import Items from '../containers/Items';
import Description from '../containers/Description';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/">
          <h1>Landing</h1>
        </Route>
        <Route exact path="/items">
          <Items />
        </Route>
        <Route exact path="/items/:id">
          <Description />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
