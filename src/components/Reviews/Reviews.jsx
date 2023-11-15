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
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  // const defaultImg = "/public/nophoto.jpg"

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    setError(null);
    const getReviews = async () => {
      try {
        const data = await fetchReviews(movieId);
        setMovieReviews(data);
        console.log(data);
      } catch (error) {
        setError(error);
        toast.warn(error.message);
      }
    };
    getReviews();
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
                    author_details
                      ? `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
                      : defaultImg
                  }
                  width={250}
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
