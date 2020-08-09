import { Layout } from '@src/component';
import { NotFound, ProfilePage, UsersPage } from '@src/pages';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={UsersPage} />
          <Route path='/user/:login' component={ProfilePage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};
