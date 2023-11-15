import { fetchHomeMovList } from 'api/api';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const HomePage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [homeMovList, setHomeMovList] = useState([]);
  const defaultImg = '/public/nophoto.jpg';

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    const fechData = async () => {
      try {
        const data = await fetchHomeMovList();
        setHomeMovList(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
        toast.warn(error);
      } finally {
        setIsLoading(false);
      }
    };
    fechData();
  }, []);

  return (
    <div>
      {error !== null && toast.error(error)}
      {isLoading && <p>Loading...</p>}
      <ul>
        {homeMovList.map(({ id, poster_path, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                      : '/public/nophoto.jpg'
                  }
                  alt={title}
                />
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
