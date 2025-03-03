import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/home';
import MovieList from './pages/movieList/MovieList';
import Addmovie from './pages/movieList/Addmovie';
import EditMovie from './pages/movieList/EditMovie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="movie" element={<MovieList />} />
          <Route path="movie/add" element={<Addmovie />} />
          <Route path="movie/edit/:id" element={<EditMovie />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
