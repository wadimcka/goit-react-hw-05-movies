import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { fetchCast } from 'api/api';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [moviCasts, setMoviCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const defaultImg = 'https://fakeimg.pl/200x300';

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (!movieId) return;

    const getCasts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchCast(movieId, { signal });
        setMoviCasts(data);
        if (data.length === 0) {
          toast.warn('No data found for your request');
        }
      } catch (error) {
        setError(error);
        toast.warn(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCasts();
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      {error !== null && toast.error(error)}
      {isLoading && <Loader />}
      <ul>
        {moviCasts.map(
          ({ cast_id, profile_path, original_name, character }) => {
            return (
              <li key={cast_id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : defaultImg
                  }
                  width={250}
                  alt="Card"
                />
                <h3>{original_name}</h3>
                <h3>Character: {character}</h3>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Cast;
