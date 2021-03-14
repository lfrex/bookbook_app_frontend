import React from 'react';
import { Route, Link } from 'react-router-dom';

const BooksPage = props => {
    console.log(props.potentialBooks);
    return (
   <div>
       {props.potentialBooks.map(book => (
           <div key={book.id}>
               <Link to={`book/${book.id}`}>
                    <img src={book.img} alt="book cover" />
               </Link>
               <h3>{book.title}</h3>
               <p>{book.author}</p>
               <button onClick={() => props.addBook(book)}>Add Book</button>
            </div>
       ))}
        <Link to="/profile">
            <button type="button"> Return to Profile </button>
        </Link>
   </div>
       )
}

export default BooksPage;