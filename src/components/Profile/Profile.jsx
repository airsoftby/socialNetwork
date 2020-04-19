import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Myposts/MyPosts';


const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Inca_Tern_Immage_003.jpg/1200px-Inca_Tern_Immage_003.jpg' />
      </div>
      <div className={s.aboutMe}>
        ava + description
      </div>
       <MyPosts/>

    </div>
  )
}
export default Profile;