import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/home';
import MovieList from './pages/movieList/MovieList';
import Addmovie from './pages/movieList/Addmovie';
import EditMovie from './pages/movieList/EditMovie';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
