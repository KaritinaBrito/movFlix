import { useEffect, useState } from "react"
import { getMovie } from "../data/api";
import { CardMovie } from "./CardMovie";
import '../components/ContextMovieCard.css'


export const ContextMovieCard=()=>{
    const [movies, setMovies]= useState([]);

    useEffect(()=>{
        getMovie("/discover/movie")
        .then((data) => {
            setMovies(data.results);
        })
    }, []);

    return (
        <ul className="container">
            {movies.map((movie)=>(
                <CardMovie key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}