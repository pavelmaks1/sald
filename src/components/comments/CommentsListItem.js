import React from 'react';
import { connect } from 'react-redux';
import { startRemoveComment } from '../../actions/comments';

const CommentsListItem = ({ name, note, author_id, id, userId, postId, startRemoveComment }) => (
  <div className="list-item">
    <div>
      <h4>{name}</h4>
      <p>{note}</p>
    </div>
    {
      userId === author_id &&
      <button className="button" onClick={() => startRemoveComment(postId, { id })}>Remove</button>
    }
    
  </div>
);

const mapStateToProps = (state) => ({
  userId: state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  startRemoveComment: (postId, data) => dispatch(startRemoveComment(postId, data))
});

export default connect(mapStateToProps,mapDispatchToProps)(CommentsListItem);