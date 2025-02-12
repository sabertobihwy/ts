import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MovieService } from './service/MovieService';
import { store } from './redux/store';
import { createAction } from './redux/action/CreateAction';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

// --- test axios
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

// --- test reducer 

MovieService.findMovieByCond({
  page: 2
}).then(list => {
  if ('total' in list) {
    store.dispatch(createAction.createSetCondAction({ page: 2 }))
    store.dispatch(createAction.createAddMovieAction(list.data, list.total))
    // console.log(list)
  }
})


