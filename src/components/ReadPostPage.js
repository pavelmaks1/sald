import React from 'react';
import { connect } from 'react-redux';

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
  </div>
);

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
})

export default connect(mapStateToProps)(ReadPostPage);