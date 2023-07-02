import React from 'react';
import books from '../data/books.json';
import '../styles/index.css';

class Book extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul className="books">
        {books.map((book) => {
          return (
            <li className="book">
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Book;
