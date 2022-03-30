import "./MovieList.css"
import Movie from "./Movie";

const MovieList = (props) => {
    const { title } = props;

    return (
        <div className="moviesContainer">
            <h1>{title}</h1>
            <Movie />
            <Movie />    
        </div>
    )
}

export default MovieList;