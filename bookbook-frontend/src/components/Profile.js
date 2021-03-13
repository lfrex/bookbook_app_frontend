import React from 'react';

const Profile = (props) => {
    console.log(props.user.bookList);
    return(
        <div>
            <h3>{props.user.name}</h3>
            <h3>{props.user.username}</h3>
            <img src={props.user.pic} alt="user pic"/>
            <br></br><br></br>
            <h2>Pending books: </h2>    
            <br></br>
            {props.user.bookList.map(book => <img src={book.img} alt="book cover" />)}
        </div>
    )
}

export default Profile;