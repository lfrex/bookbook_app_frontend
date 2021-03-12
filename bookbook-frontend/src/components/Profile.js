import React from 'react';

const Profile = (props) => {
    return(
        <div>
            <h3>{props.user.name}</h3>
            <h3>{props.user.username}</h3>
            <img src={props.user.pic} alt="a book cover"/>
            {props.user.bookList.map(book => <p>{book.img}</p>)}
        </div>
    )
}

export default Profile;