import Home from 'pages/HomePage/HomePage';
import MoviePage from 'pages/MoviePage/MoviePage';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Фільм</div>} />
        <Route path="/movies/:movieId" element={<MoviePage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
