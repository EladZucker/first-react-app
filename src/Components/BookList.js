import "./BookList.css"
import Book from "./Book"

const BookList = (props) => {
  const { title }  = props
    return (
      <div className="booksContainer">
        <h1>{title}</h1>
        <Book name="Book 1" publishDate="10/10/2020" />
        <Book name="Book 2 is the best" publishDate="1/1/2020"/>
        <Book name="Book 3" publishDate="10/10/2021"/>
      </div>
    );
}

export default BookList;