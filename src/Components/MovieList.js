import "./MovieList.css"
import Movie from "./Movie";

const MovieList = (props) => {
    const { title } = props;
    const movies = props.movies;

    return (
        <div className="moviesContainer">
            <h1>{title}</h1>
            {movies.map( (movie, idx) => 
                <Movie key={idx} name={movie.name} publishDate={movie.publishDate}></Movie>
            )}
        </div>
    )
}

export default MovieList;