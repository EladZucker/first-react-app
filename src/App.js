import logo from './logo.svg';
import './App.css';
import BookList from './Components/BookList';
import MovieList from './Components/MovieList';
import AddBook from './Components/AddBook';
import { useState } from 'react';

const defaultBooks = [
  {name: "Book 1", publishDate: "10/10/2020"},
  {name: "Book 3", publishDate: "05/10/2021"},
]

const movies = [
  {name: "Movie 1", publishDate: "10/10/2020"},
  {name: "Movie 2", publishDate: "05/10/2021"},
]

function App() {

  const [books, setBooks] = useState(defaultBooks); 

  const onAddBookEvent = (name, publishDate) => {

    console.log("onAddBookEvent :" +name +" " +publishDate )
    
    const newBooks = [...books];
    newBooks.push({name: name, publishDate: publishDate});
    setBooks(newBooks);
  }
  return (
    <div>
      <div className='BooksContainer'>
        <BookList title="My best books" books={books}></BookList>
        <AddBook onAddBookEvent={onAddBookEvent}/>
      </div>

      <MovieList title="title" movies={movies}></MovieList>

    </div>
  );
}

export default App;
