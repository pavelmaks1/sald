import React from 'react';
import AuthProfileForm from './AuthProfileForm';
import { connect } from 'react-redux';
import { startUpdateUser } from '../../actions/auth';
import { startUpdateName } from '../../actions/posts';

class AuthProfile extends React.Component {

  onSubmit = (name) => {
    this.props.startUpdateUser(name);
    this.props.startUpdateName({ author_name: name });
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Your Profile</h1>
          </div>
        </div>
        <div className="page-header">
          <div className="content-container">
            <AuthProfileForm
              onSubmit={this.onSubmit}
              userAuth={this.props.userAuth}
            />
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  userAuth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  startUpdateUser: (name) => dispatch(startUpdateUser(name)),
  startUpdateName: (updates) => dispatch(startUpdateName(updates))
});


export default connect(mapStateToProps, mapDispatchToProps)(AuthProfile);