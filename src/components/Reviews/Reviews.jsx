import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { fetchReviews } from 'api/api';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const defaultImg = 'https://fakeimg.pl/200x300';

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (!movieId) return;

    const getReviews = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchReviews(movieId, { signal });
        setMovieReviews(data);
        if (data.length === 0) {
          toast.warn('No data found for your request');
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Request was aborted');
        } else {
          setError(error);
          toast.warn(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      {error !== null && toast.error(error)}
      {isLoading && <Loader />}
      <ul>
        {movieReviews.map(
          ({ author, id, content, created_at, author_details }) => {
            return (
              <li key={id}>
                <img
                  src={
                    author_details && author_details.avatar_path
                      ? `https://image.tmdb.org/t/p/w200/${author_details.avatar_path}`
                      : defaultImg
                  }
                  width={200}
                  alt="Card"
                />
                <h3>{author}</h3>
                <span>{created_at}</span>
                <p>{content}</p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Reviews;
