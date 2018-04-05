import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin, isAuthenticated }) => (
  <div className="content-container">
    <h1>Sald app</h1>
    {!isAuthenticated && <button className="button button-success" onClick={startLogin}>Log in</button>
 }
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);