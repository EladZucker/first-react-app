import "./Book.css"
const Book = (props) => {
    return (
      <div className="book">
        <h1>{props.name}</h1>
        <h1>{props.publishDate}</h1>
      </div>
    );
}

export default Book;