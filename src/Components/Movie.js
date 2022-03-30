import "./Movie.css"
const Movie = (props) => {
    const movieName = "My Special Movie"
    return (
        <div className="movie">
            <h1>{movieName}</h1>
        </div>
        )
}

export default Movie;