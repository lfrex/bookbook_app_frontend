import React from 'react';
import { Route, Link } from 'react-router-dom';

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
            <Link to="/BookDetail" >
                {props.user.bookList.map(book => <img src={book.img} alt="book cover" />)}
            </Link>
        </div>
    )
}

export default Profile;