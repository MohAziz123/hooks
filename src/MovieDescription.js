import { useParams } from "react-router-dom"

const MovieDescription =({movies})=>{
    const {id} = useParams()
    const found = movies.find(el=> el.id == id)
    return(
        <>
        <h1>{found.title}</h1>
        <h2>{found.description}</h2>
        </>
    )
}

export default MovieDescription