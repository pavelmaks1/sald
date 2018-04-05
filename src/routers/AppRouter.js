import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AddPostPage from '../components/AddPostPage';
import EditPostPage from '../components/EditPostPage';
import PostsDashboardPage from '../components/PostsDashboardPage';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ReadPostPage from '../components/ReadPostPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/read/:id" component={ReadPostPage}  />
        <PublicRoute path="/dashboard" component={PostsDashboardPage} />
        <PrivateRoute path="/create" component={AddPostPage} />
        <PrivateRoute path="/edit/:id" component={EditPostPage}  />
      </Switch>
    </div>
  </Router>

);

export default AppRouter;