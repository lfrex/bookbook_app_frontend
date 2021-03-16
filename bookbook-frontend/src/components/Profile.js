import React from 'react';
import { Route, Link } from 'react-router-dom';

const Profile = (props) => {
    console.log(props.user.bookList);
    return(
        <div>
            <br></br>
            <h3>{props.user.name}</h3>
            <h3>{props.user.username}</h3>
            <img className="profile-img" src={props.user.pic} alt="user pic"/>
            <br></br><br></br>
            <h2>Books you're following: </h2>    
            <br></br>
            
            <div>

                {props.user.bookList.map(book => (
                <div key={book.id}>
                  
                    <img src={book.img} alt="book cover" />
                    <br></br><br></br>
                    <p><strong>Title:</strong> {book.title}</p>
                    <br></br>
                </div>
                ))}

            </div>
        </div>
    )
}

export default Profile;