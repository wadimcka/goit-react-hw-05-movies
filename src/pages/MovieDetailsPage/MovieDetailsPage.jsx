import { fetchMovieDetail } from 'api/api';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  useEffect(() => {
    if (!movieId) return;
    setError(null);
    setIsLoading(true);
    const getMovie = async () => {
      try {
        const movieData = await fetchMovieDetail(movieId);
        setMovieData(movieData);
        console.log(movieData);
      } catch (error) {
        setError(error.message);
        toast.warn(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  const { original_title, poster_path, vote_average, overview, genres } =
    movieData;

  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <h1>{original_title}</h1>
      <span>User Score: {vote_average ? vote_average.toFixed(1) : 'N/A'}%</span>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Ganres</h2>
      <ul>
        {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
