import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[],
      username: "",
      password: ""
    };
  }

  componentDidMount = () => {
    this.getBooks();
  }

  getBooks = async () => {
    const response = await axios.get("http://localhost:3001/book/all")
    
    this.setState({
      books: response.data
    })
  }

  render() {

    const books = this.state.books.map(book => {
      return (
        <div>
          <h3>{book.title}</h3>
          <h2>{book.author}</h2>
          <img src={book.img} alt="book-cover" />
        </div>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Bookbook-App</h1>
          <div>
            {books}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
