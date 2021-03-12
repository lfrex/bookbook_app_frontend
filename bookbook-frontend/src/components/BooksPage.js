import React from 'react';

const BooksPage = (props) => {
    console.log(props);
    return (
   <div>
       {props.books.map(book => (
           <div>
               <img src={book.img} alt="book cover" />
               <h3>{book.title}</h3>
               <p>{book.author}</p>
               <button onClick={() => props.addBook(book)}>Add Book</button>
            </div>
       ))}
   </div>
       )
}

export default BooksPage;