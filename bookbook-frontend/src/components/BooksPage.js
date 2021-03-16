
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const BooksPage = props => {
    console.log(props.potentialBooks);
    return (
   <div>
       <br></br><br></br>
       <h1 className="books-h1" >Current books available</h1>
       {props.potentialBooks.map(book => (
       
          
           <div className="grid-list" key={book.id}>
               <br></br><br></br>
               <div className="image-txt-wrapper">
                <Link to={`book/${book.id}`}>
                        <img className="display-books-img" src={book.img} alt="book cover" />
                </Link>
                <br></br><br></br>
                <h6 className="display-books-txt" >{book.title}</h6>
               </div>
              
               <button onClick={() => props.addBook(book)}>Add Book</button>
               <br></br><br></br><br></br>
            </div>
          
        
       ))}
        <Link to="/profile">
            <br></br>
            <Button variant="primary" size="lg"> Return to Profile </Button>{' '}

            <br></br><br></br>
        </Link>
   </div>
       )
}

export default BooksPage;