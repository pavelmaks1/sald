import React from 'react';
import selectPosts from '../selectors/posts';
import PostsListItem from './PostsListItem';
import { connect } from 'react-redux';


export const PostsList = (props) => (
  <div className="content-container">
    {
      props.posts.length === 0 ? (
        <div className="list-item list-item-message">
          <div className="content-container">
            <span>No posts</span>
          </div>
        </div>
      ) : (
          props.posts.map((post, index) =>
            <PostsListItem
              {...post}
              key={post.id}
            />
          )
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    posts: selectPosts(state.posts, state.filters)
  }
}

export default connect(mapStateToProps)(PostsList);