import React from 'react';

const Profile = (props) => {
    return(
        <div>
            <h3>{props.user.name}</h3>
            <h3>{props.user.username}</h3>
            <img src={props.user.pic} alt="user pic"/>
            
        </div>
    )
}

export default Profile;