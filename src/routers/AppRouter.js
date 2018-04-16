import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/layouts/Header';
import AddPostPage from '../components/posts/AddPostPage';
import EditPostPage from '../components/posts/EditPostPage';
import PostsDashboardPage from '../components/posts/PostsDashboardPage';
import LoginPage from '../components/auth/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ReadPostPage from '../components/posts/ReadPostPage';
import AuthProfile from '../components/auth/AuthProfile';

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
        <PrivateRoute path="/profile" component={AuthProfile}  />        
      </Switch>
    </div>
  </Router>

);

export default AppRouter;