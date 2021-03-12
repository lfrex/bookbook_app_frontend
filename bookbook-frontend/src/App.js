import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Profile from './components/Profile';

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
      potentialBooks: []
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
      potentialBooks: availableBooks
    })
  }

  addBook = (newBook) => {
    const currentBooks = this.state.user;
    currentBooks.bookList.push(newBook);

    const potentialBooks = this.state.potentialBooks;
    const newPotentialBooks = potentialBooks.filter(book => {
      return newBook.id
    })
    console.log(newPotentialBooks);

    this.setState({
      user: currentBooks,
      potentialBooks: newPotentialBooks
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
          </nav>
          </header> 

          <Route path="/profile" render={() => (
            <Profile 
            user={this.state.user} 
            books={books}
            />
          )} />
          <div>
            {books}
          </div>
      
      </div>
    );
  }
}

export default App;
