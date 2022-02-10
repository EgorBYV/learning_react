import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 6, name: 'Alberth' },
  { id: 7, name: 'Victoria' },
  { id: 8, name: 'Romualda' },
  { id: 9, name: 'Germiona' },
  { id: 10, name: 'Antoniy' },
]

let messagesData = [
  { id: 4, text: 'You' },
  { id: 5, text: 'Kick' },
  { id: 6, text: 'My name is Barry' },
  { id: 7, text: 'JavaScript is my favorite language.' },
  { id: 8, text: "Swift is my wife's favorite language." },
]

let postsData = [
  { id: 1, text: 'Привет!', number: 11 },
  { id: 2, text: 'Здравствуй, Солнышко!', number: 12 },
  { id: 3, text: 'Как у тебя дела?', number: 9 },
  { id: 4, text: 'Спасибо! Хорошо! Скучаю по тебе!', number: 1 },
  { id: 5, text: "Я тоже очень скучаю по тебе. Рада, что у тебя всё хорошо! Давай увидимся! Ты когда свободен?", number: 4 },
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
