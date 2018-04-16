import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ startLogin, isAuthenticated, user }) => (
  <div className="content-container">
    <h1>Sald app</h1>
    {console.log(user)}
    {
      isAuthenticated ?
        ( <button className="button button-success" onClick={startLogin}>Log in</button>)
        :
        ( <Redirect to="/dashboard" />)
    }
    }
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
  user: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);