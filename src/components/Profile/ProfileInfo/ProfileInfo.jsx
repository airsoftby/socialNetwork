import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div>
      <div className = {s.ProfileInfoView}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Inca_Tern_Immage_003.jpg/1200px-Inca_Tern_Immage_003.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
      
    </div>
  )
}
export default ProfileInfo;