import React from 'react';
import { connect } from 'react-redux';

const ReadPostPage = (props) => (
  <div>
    {console.log(props)}
    <h1>{props.post.description}</h1>
    <p>{props.post.note}</p>
  </div>
);

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
})

export default connect(mapStateToProps)(ReadPostPage);