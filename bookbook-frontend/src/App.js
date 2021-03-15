import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';



import Profile from './components/Profile';
import Login from './components/Login';
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
      selectBook: {},
      username: "",
      password: "",
      users: []
    };
  }

  componentDidMount = () => {
    this.getBooks();
    this.getUsers();
  }

  getBooks = async () => {
    const response = await axios.get("http://localhost:3001/book/all")
    
    const availableBooks = [response.data]

    this.setState({
      books: response.data,
      potentialBooks: response.data
    })
  }

  getUsers = async () => {
    const response = await axios.get("http://localhost:3001/user/all")
    
    const availableUsers = [response.data]

    this.setState({
      users: response.data
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

  loginOnChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = async (e) =>{
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);

    const response = await axios.post("http://localhost:3001/user/login", data);
    
    console.log(response);

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
            
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/books">
              <Nav.Link>See available books</Nav.Link>
            </LinkContainer>
          </nav>
          </header> 

          <Route path="/profile" render={() => (
            <Profile 
            user={this.state.user}
            login={this.login} 
            />
          )} />
         
         <Route path="/login" render={() => (
            <Login
            users={this.state.users}
            username={this.state.username}
            password={this.state.password}
            loginOnChange={this.loginOnChange}
            login={this.login} 
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
        <footer>
          <div>
            <blockquote cite="https://en.wikipedia.org/wiki/Groucho_Marx">
            "I find television very educating. Every time somebody turns on the set, 
            I go into the other room and read a book."
            </blockquote>
            <p>- Groucho Marx</p>
          </div>
        </footer>

      
      </div>
    );
  }
}

export default App;
