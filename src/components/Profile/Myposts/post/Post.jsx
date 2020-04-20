import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

  return (



    <div className={s.item}>
      <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png" />

      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>


  )
}
export default Post;