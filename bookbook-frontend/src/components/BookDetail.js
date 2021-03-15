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

                <h2>{foundBook.title},</h2>
                <h3>By {foundBook.author}.</h3>              
                <img className="book-img" src={foundBook.img} alt="book cover" />   
                <br></br><br></br>
                ISBN: {foundBook.isbn}
                <br></br>
                Genre: {foundBook.genre} 
                <br></br>
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
                    <br></br><br></br>
                </div>

                <Link to="/profile"> Return to Profile</Link>
                <Link to="/books">Return to Available Books</Link>

            </div>
      
   </div>
       )
}

export default BookDetail;