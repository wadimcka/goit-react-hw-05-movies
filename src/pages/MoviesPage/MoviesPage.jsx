import { fetchSearchMovies } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import MovisList from 'components/MovisList/MovisList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const MoviesPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieQuery, setmovieQuery] = useState('');
  const [searchMoviesData, setSearchMoviesData] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    setmovieQuery(searchParams.get('searchQuery'));
    console.log(movieQuery);

    if (!movieQuery) {
      return;
    }
    const getSearchMovies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchSearchMovies(movieQuery, { signal });

        if (data.length === 0) {
          toast.warn('No data found for your request');
        }
        setSearchMoviesData(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Request was aborted');
        } else {
          setError(error.message);
          toast.warn(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getSearchMovies();

    return () => {
      abortController.abort();
    };
  }, [movieQuery, searchParams]);

  return (
    <div>
      <SearchForm />
      {error !== null && toast.error(error)}
      {isLoading && <Loader />}
      <MovisList movieListData={searchMoviesData} />
    </div>
  );
};

export default MoviesPage;
