import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/layouts/Header';
import { Route, Redirect } from 'react-router-dom';
import Footer from '../components/layouts/Footer';

export const PublicRoute = (({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      <div>
        <Header />
        <Component {...props} />
        <Footer />
      </div>

    )}
    />
  ));

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);