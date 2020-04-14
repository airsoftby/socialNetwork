import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Inca_Tern_Immage_003.jpg/1200px-Inca_Tern_Immage_003.jpg' />
      </div>
      <div className={s.aboutMe}>
        ava + description
      </div>
      <div className={s.aboutMe}>
        My Posts
      </div>

      <div className={s.aboutMe}>
        New Post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          post 1
         </div>
        <div className={s.item}>
          post 2
           </div>
      </div>

    </div>
  )
}
export default Profile;