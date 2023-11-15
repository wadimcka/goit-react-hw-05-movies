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
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  // const defaultImg = "/public/nophoto.jpg"

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    setError(null);
    const getCasts = async () => {
      try {
        const data = await fetchCast(movieId);
        setMoviCasts(data);
        console.log(data);
      } catch (error) {
        setError(error);
        toast.warn(error.message);
      } finally {
        setIsLoading(true);
      }
    };
    getCasts();
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
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
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
