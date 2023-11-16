import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MovisList from 'components/MovisList/MovisList';
import { fetchHomeMovList } from 'api/api';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieListData, setMovieListData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fechData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchHomeMovList({ signal });
        setMovieListData(data);
        if (data.length === 0) {
          toast.warn('No data found for your request');
        }
      } catch (error) {
        setError(error.message);
        toast.warn(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fechData();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      {error !== null && error(error)}
      {isLoading && <Loader />}
      <MovisList movieListData={movieListData} />
    </div>
  );
};

export default HomePage;
