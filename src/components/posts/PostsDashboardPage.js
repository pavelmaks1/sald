import React from 'react';
import PostsListFilters from './PostsListFilters';
import PostsList from './PostsList';

const PostsDashboardPage = () => (
  <div>
    <PostsListFilters />
    <PostsList />
  </div>
);

export default PostsDashboardPage;