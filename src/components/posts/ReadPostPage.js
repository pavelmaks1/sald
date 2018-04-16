import React from 'react';
import { connect } from 'react-redux';
import CommentsList from '../comments/CommentsList';
import AddComment from '../comments/AddComment';

const ReadPostPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1>{props.post.description}</h1>

      </div>
    </div>
    <div className="content-container">
      <p>{props.post.note}</p>
    </div>
    <div className="content-container">
      <p className="author">
        {props.post.author_name}
      </p>
    </div>
    <div className="content-container">
      {props.isAuthenticated && <AddComment postId={props.post.id} />}
      <CommentsList postId={props.post.id} />
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  isAuthenticated: !!state.auth.uid,
  post: state.posts.find((post) => post.id === props.match.params.id)
})

export default connect(mapStateToProps)(ReadPostPage);