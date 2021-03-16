import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Accordion, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


const BookDetail = props => {
   const foundBook = props.potentialBooks.find(book => {
        return book.id == props.match.params.id;
   })
    console.log(foundBook);

    return (
   <div>      
           <div>
                <br></br><br></br>
                <h2>{foundBook.title},</h2>
                <h3>By {foundBook.author}.</h3>   
                <br></br>           
                <img className="book-img" src={foundBook.img} alt="book cover" />   
                <br></br><br></br>
                <h3>Details</h3>
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
            </div>
            <div className="return-buttons">
                <Link to="/profile">
                    <br></br>
                    <Button variant="primary" size="lg"> Return to Profile </Button>{' '}
                    <br></br>
                </Link>
                <Link to="/books">
                    <br></br>
                    <Button variant="primary" size="lg"> Return to Available Books </Button>{' '}
                    <br></br><br></br>
                </Link>
            </div>

   </div>
       )
}

export default BookDetail;