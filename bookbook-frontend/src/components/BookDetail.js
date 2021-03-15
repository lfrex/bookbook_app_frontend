import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Accordion, Card } from "react-bootstrap";


const BookDetail = props => {
   const foundBook = props.potentialBooks.find(book => {
        return book.id == props.match.params.id;
   })
    console.log(foundBook);

    return (
   <div>      
           <div>

                <h3>{foundBook.title}</h3>
                <h2>{foundBook.author}</h2>
                ISBN: {foundBook.isbn}
                Genre: {foundBook.genre} 
                
                <img src={foundBook.img} alt="book cover" />   

                <div>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                See comments about the book:
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>{foundBook.comments}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>

                <Link to="/profile"> Return to Profile</Link>
                <Link to="/books">Return to Available Books</Link>

            </div>
      
   </div>
       )
}

export default BookDetail;