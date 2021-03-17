import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {LinkContainer} from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';





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
        name: "Guest",
        username: "",
        pic: "https://i.imgur.com/4xcXDw6.jpg",
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
    const book=await axios.get(`https://bookbackend-app.herokuapp.com/book/`+bookId)
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

    const response = await axios.post("https://bookbackend-app.herokuapp.com/user/login", data);
    
    console.log(response);

  }

  render() {  
    return (
      <div className="App">
      
        <header className="App-header">

          <div className="header-img-txt">
            <img className="header-img" src="https://i.imgur.com/LdDzXus.png" alt="A stack of books" />
        
          <div classNameÇ="header-title">
            <br></br>
            <h1>Welcome to Bookbook-App</h1>      
            <p>The place to know everything about books!</p>
          </div>
          </div>

          <aside>
            <nav>    
              <LinkContainer to="/profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/books">
                <Nav.Link>See available books</Nav.Link>
              </LinkContainer>          
            </nav>
          </aside>
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
