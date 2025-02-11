import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MovieService } from './service/MovieService';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// MovieService.addMovie({
//   name: "test01",
//   timeLong: 0,
//   types: [],
//   isHot: false,
//   areas: []
// }).then(console.log)
//67a92ae86b54d95e45bb14a6
// MovieService.editMovie({
//   _id: "67a92ae86b54d95e45bb14a6",
//   name: "CHANGE",
//   timeLong: 11,
//   types: ["12311", "12311", '12311'],
//   isHot: true,
//   areas: ["123"]
// }).then(console.log)

// MovieService.findMovieById("67a92ae86b54d95e45bb14a6")
//   .then(console.log)

// MovieService.findMovieByCond({
//   page: 2
// }).then(console.log)

// MovieService.delMovie("67a92ae86b54d95e45bb14a6").then(console.log)