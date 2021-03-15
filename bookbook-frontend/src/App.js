import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';

import Profile from './components/Profile';
import BooksPage from './components/BooksPage';
import BookDetail from './components/BookDetail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[],
      user: {
        name: "Octavio Villalpando",
        username: "Mostro",
        pic: "https://i.pinimg.com/564x/68/ee/c7/68eec72db45045c5e5d3eee08e992531.jpg",
        bookList: []
      },
      potentialBooks: [],
      selectBook: {}
    };
  }

  componentDidMount = () => {
    this.getBooks();
  }

  getBooks = async () => {
    const response = await axios.get("http://localhost:3001/book/all")
    
    const availableBooks = [response.data]

    this.setState({
      books: response.data,
      potentialBooks: response.data
    })
  }

  addBook = (newBook) => {
    const currentBooks = this.state.user;
    currentBooks.bookList.push(newBook);

    const potentialBooks = this.state.potentialBooks;
    const newPotentialBooks = potentialBooks.filter(book => {
      return newBook.title !== book.title
    })
    console.log(newPotentialBooks);

    this.setState({
      user: currentBooks,
      potentialBooks: newPotentialBooks
    })
  }

  selectBookById = async(e, bookId) => {
    e.preventDefault();
    const book=await axios.get(`http://localhost:3001/book/`+bookId)
    this.setState({
      selectBook: book.data.book[0]
    })
  }

  render() {
   
    const books = this.state.books.map(book => {
      return (
        <div>
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
          <img src={book.img} alt="book-cover" />
        </div>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
        <h1>Welcome to Bookbook-App</h1>
          <nav>
            <Link to="/profile">Profile</Link>
            <Link to="/books">See available Books</Link>
          </nav>
          </header> 

          <Route path="/profile" render={() => (
            <Profile 
            user={this.state.user} 
            />
          )} />
         
          <Route path="/books" render={() => (
            <BooksPage 
            potentialBooks={this.state.potentialBooks}
            addBook={this.addBook}
            />
          )} />

          <Route path="/book/:id" render={(routerProps) => (
            <BookDetail         
            potentialBooks={this.state.potentialBooks}      
            {...routerProps}
            />
          )} />


          <div>
           
          </div>
      
      </div>
    );
  }
}

export default App;
