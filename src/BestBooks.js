import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
//import Book from './Book.js';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let bookResponse = await axios.get(url);
      let books = bookResponse.data;
      console.log(books[0]);
     this.setState({books:books}); 
    } catch (error) {
      console.log('error', error.response);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    

    return (

      <>
      {this.state.books.length ?( 
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.state.books[0].title}</h3>
          <p>{this.state.books[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{this.state.books[1].title}</h3>
          <p>{this.state.books[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{this.state.books[2].title}</h3>
          <p>
            {this.state.books[2].description}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      ) : <p>No books to display</p> }
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <container>
            {this.state.books.map((book, idx) => (
              <div key={idx}>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
              </div>
            ))}
          </container>
        ) : (
          <p>No books in the database.</p>
        )}
      </>
    )
  }
}

export default BestBooks;