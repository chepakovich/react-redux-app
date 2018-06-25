import React from 'react'
import Post from './Post.jsx'

const PostList = ({ posts }) =>
<div className="table">
    {posts.map(
      (post, i) =>
        <div className="row" key={i.toString()}>
          <Post {...post} />
          <div className="clear"></div>
        </div>
    )}
  </div>

export default PostList

