import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/home';
import MovieList from './pages/movieList/MovieList';
import Addmovie from './pages/movieList/Addmovie';
import EditMovie from './pages/movieList/EditMovie';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { MovieService } from './service/MovieService';
import { IResponseData, IResponseError } from './interface/CommonTypes';
import { IMovie } from './interface/IMovie';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="movie" element={<MovieList />} />
            <Route path="movie/add" element={<Addmovie onFinish={async (values, success, error) => {
              const res: IResponseError | IResponseData<IMovie> = await MovieService.addMovie(values)
              if (res.error !== "") {
                error(res.error)
              } else {
                success("add success")
              }
            }} />} />
            <Route path="movie/edit/:id" element={<EditMovie />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
