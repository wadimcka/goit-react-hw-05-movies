import { fetchHomeMovList } from 'api/api';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [homeMovList, setHomeMovList] = useState([]);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    const fechData = async () => {
      try {
        const data = await fetchHomeMovList();

        setHomeMovList(data);
        console.log(data);
      } catch (error) {
        setError(error);
        toast.warn(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fechData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <ul>
        {homeMovList.map(({ id, poster_path, title }) => {
          return (
            <li key={id}>
              <img
                simg
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                    : 'NO FOTO'
                }
                alt={title}
              />
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
