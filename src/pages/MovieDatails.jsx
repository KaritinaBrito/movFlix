import { useParams, Link } from "react-router-dom";
import { getMovie } from "../data/api";
import { useState, useEffect } from "react";
import { getMovieImg } from "../utils/getMovieImg";
import { MdArrowBackIos } from "react-icons/md";
import '../pages/MovieDetails.css';

export const MovieDetails=()=>{
    const {movieId} = useParams();
    const [movie, setMovie]= useState([]);
    const [genres, setGenres]= useState([]);
    
    useEffect(()=>{
        getMovie("/movie/"+movieId).then((data)=>{
            setMovie(data)
            setGenres(data.genres[0])
        })
    }, [movieId]);

    const imageUrl = getMovieImg(movie.poster_path, 500)


    return(
        <>
        <Link to={"/"} className="icon-container">
            <MdArrowBackIos className="icon-back" />
        </Link>
        <div className="details-container">
            <img src={imageUrl} alt={movie.title} className="col details-img"/>
            <div className="col details-text">
                <p className="title-detail">Title: <b>{movie.title}</b></p>
                <p className="Genre-detail">Genre: {genres.name}</p>
                <p className="Description-detail">Description: {movie.overview}</p>
            </div>
        </div>
        </>
    )
}