import styles from '../components/CardMovie.module.css';
import {Link} from 'react-router-dom';

export const CardMovie = ({ movie }) =>{
    
    const imageUrl = "https://image.tmdb.org/t/p/w300"+movie.poster_path;

    return (
        <li className={styles.cardmovie}>
            <Link to={"/movies/"+movie.id}>
                <img width={250} height={330} src={imageUrl} alt={movie.title} className='movie-img'/>
            </Link>
                <div>{movie.title}</div>
        </li>
    )
}