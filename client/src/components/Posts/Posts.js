import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
// TODO
// import useSelector and useDispatch hooks
// import actions and selectors if needed
//


const Posts = () => {
  // declare a useDispatch
  // decare a useSelector if needed
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  
  console.log(posts)
  
  return (
    <>
      <h1>Posts</h1>
      <Post/>
      <Post/>
    </>
  )
}

export default Posts;