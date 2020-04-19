import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = () => {
  return (
    <div>
      <div>
        My Posts
      </div>
      <textarea></textarea>
      <button>
        Add Post
      </button>
      <div className={s.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts