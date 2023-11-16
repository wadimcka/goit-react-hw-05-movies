import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Movie, MovieList, MovieName } from './MovisList.styled';
const defaultImg = 'https://fakeimg.pl/200x300';

const MovisList = ({ movieListData }) => {
  const location = useLocation();
  return (
    <div>
      <MovieList>
        {movieListData.map(({ id, poster_path, title }) => {
          return (
            <Movie key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                      : defaultImg
                  }
                  alt={title}
                />
                <MovieName>{title}</MovieName>
              </Link>
            </Movie>
          );
        })}
      </MovieList>
    </div>
  );
};

export default MovisList;
