import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown'

export const Header = ({ startLogout, isAuthenticated }) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header-content">
          <Link className="header__title" to="/dashboard" >
            <img className="header__image" src='/img/12463-chipmunk.png' alt="" />
            <h1>Sald</h1>
          </Link>
          {isAuthenticated ? (
            <div>
              <Link
                className="button button--link"
                to="/profile"
              >
                Profile
                <FontAwesomeIcon className="icon icon--beside" icon={faAngleDown} />
              </Link>
              <button className="button button--link button-danger" onClick={startLogout}>Log out</button>
            </div>
          ) : (
              <Link className="button button--link button-success" to="/">Log in</Link>
            )
          }
        </div>
      </div>
    </header>
  )
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);