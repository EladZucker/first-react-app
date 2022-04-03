import { useState } from "react";
import "./AddBook.css";

const AddBook = (props) => {
    console.log("addbook component rendered.");
    const [ name, setName ] = useState("test");
    const [ publishDate, setPublishDate ] = useState("01/01/2020");

    const CreateNewBookHander = (event) => {
        event.preventDefault();
        console.log(name, publishDate);
        props.onAddBookEvent(name, publishDate);
        /* create new book */
    }


    return (
        <>
            <form>
                <label>Name :</label>
                <input value={name} onChange={(event) => setName(event.target.value)} type="text"></input>
                <label>Publish Date :</label>
                <input value={publishDate} onChange={(event) => setPublishDate(event.target.value)} type="text"></input>
                <button onClick={CreateNewBookHander}>Create New Book</button>
            </form>

        </>
    )
}

export default AddBook;
