import { fetchMovie } from 'api/api';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MoviePage = () => {
  // const [moviId, setMoviId] = useState(null);
  // const [isLoadimg, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setError(null);
  //   setIsLoading(true);
  //   const getMovie = async () => {
  //     try {
  //       const data = await fetchMovie();
  //       // setMoviId(moviId);
  //       console.log('fetchMovie', data);
  //     } catch (error) {
  //       setError(error.message);
  //       toast.warn(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getMovie();
  // }, []);

  return <div>MoviePage</div>;
};

export default MoviePage;
