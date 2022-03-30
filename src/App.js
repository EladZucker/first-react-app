import logo from './logo.svg';
import './App.css';
import BookList from './Components/BookList';
import MovieList from './Components/MovieList';
function App() {
  return (
    <div>

      <MovieList title="My best movies"></MovieList>
      <MovieList title="My worst movies"></MovieList>
      <BookList title="My best books"></BookList>
      <BookList title="My Worst books"></BookList>

    </div>
  );
}

export default App;
