import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';

const PostsListItem = ({ id, description, createdAt, isAuthenticated, note }) => {
  const actionName = isAuthenticated ? 'edit' : 'read';
  return (
    <Link className="list-item" to={`${actionName}/${id}`} >
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__subtitle">{note}</span>
      </div>
    </Link >
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PostsListItem);