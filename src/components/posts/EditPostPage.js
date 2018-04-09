import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../../actions/posts';
import { Link } from 'react-router-dom';
import CommentsList from '../comments/CommentsList';

export class EditPostPage extends React.Component {
  onSubmit = (post) => {
    this.props.startEditPost(this.props.post.id, post);
    this.props.history.push('/dashboard');
  };
  onRemove = () => {
    this.props.startRemovePost({ id: this.props.post.id });
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Post</h1>
          </div>
        </div>
        <div className="page-header">
          <div className="content-container">
            <Link to={`/read/${this.props.post.id}`}>
              <span className="page-header__read">
                Read this post also at
                {` /read/${this.props.post.id}`}
              </span>
            </Link>
            <PostForm
              post={this.props.post}
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
        <CommentsList postId={this.props.post.id} />

      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: (data) => dispatch(startRemovePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);