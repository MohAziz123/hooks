import MovieCard from "./MovieCard"

const MovieList=({movies,setMovies,titre,etoile})=>{
    var x = movies.filter(el=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating >= etoile)
    return(
        <div className="list">
            {
                x.length == 0 ? <h1>Not Found</h1> : x.map(el=><MovieCard  el={el} movies={movies} setMovies={setMovies} />) 
            }
        </div>
    )
}

export default MovieList