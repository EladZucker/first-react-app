import "./Movie.css"
import { useState } from 'react';
const Movie = (props) => {
    
    const [title, setTitle] = useState("Title");

    const onClickHandler = () => {
        setTitle("clicked");
    }

    const {name, publishDate} = props;
    return (
        <div className="movie">
            <h1>{title}</h1>
            <h1>{name}</h1>
            <h1>{publishDate}</h1>
            <button onClick={onClickHandler}>Click here</button>
        </div>
        )
}

export default Movie;