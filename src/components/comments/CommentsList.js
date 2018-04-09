import React from 'react';
import CommentsListItem from './CommentsListItem';
import { connect } from 'react-redux';
import { store } from '../../app';
import { startSetComments, setComments } from '../../actions/comments';
import selectComments from '../../selectors/comments';

export const CommentsList = (props) => {
  props.startSetComments(props.postId)
  return (
    <div className="content-container">
      {
        props.comments.length === 0 ? (
          <div className="list-item list-item-message">
            <div className="content-container">
              <span>No comments</span>
            </div>
          </div>
        ) : (
            props.comments.map((comment, index) =>
              <CommentsListItem
                {...comment}
                key={index}
                postId={props.postId}
              />
            )
          )
      }
    </div>
  )
};

const mapStateToProps = (state) => ({
  comments: selectComments(state.comments)
});

const mapDispatchToProps = (dispatch) => ({
  startSetComments: (postId) => dispatch(startSetComments(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);