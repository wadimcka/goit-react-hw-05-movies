import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieDetail } from 'api/api';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import { Loader } from 'components/Loader/Loader';
import { Container } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const goBackUrl = useRef(location.state?.from ?? '/movies');

  const defaultImg = 'https://fakeimg.pl/200x300';

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (!movieId) return;
    const getMovie = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const movieData = await fetchMovieDetail(movieId, { signal });
        setMovieData(movieData);
        if (movieData.length === 0) {
          toast.warn('No data found for your request');
        }
      } catch (error) {
        setError(error.message);
        toast.warn(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  useEffect(() => {
    const initialSearchParams = searchParams.get('searchQuery');
    if (initialSearchParams) {
      setSearchParams({ searchQuery: initialSearchParams });
    }
  }, [searchParams, setSearchParams]);

  const { original_title, poster_path, vote_average, overview, genres } =
    movieData;

  return (
    <Container>
      {error !== null && toast.error(error)}
      {isLoading && <Loader />}
      <GoBackBtn to={goBackUrl.current} />
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w200/${poster_path}`
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
    </Container>
  );
};

export default MovieDetailsPage;
