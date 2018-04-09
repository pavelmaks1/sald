import React from 'react';
import { startAddComment } from '../../actions/comments';
import { connect } from 'react-redux';
import CommentsForm from './CommentsForm';

export class AddComment extends React.Component {
  onSubmit = (post, comment) => {
    this.props.startAddComment(post, comment);
  };


  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1>Comments:</h1>
          </div>
        </div>
        <CommentsForm
          postId={this.props.postId}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  startAddComment: (post, comment) => dispatch(startAddComment(post, comment))
});

export default connect(undefined, mapDispatchToProps)(AddComment);