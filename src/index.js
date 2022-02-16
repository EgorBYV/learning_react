import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, { addMessage, addPost, updatePostText, updateTextNewMessage, subscribe } from './redux/state'

// Запускает первую прорисовку приложения в браузере при первой загрузке страницы.

export let rerenderEntireTree = () => {
  // Перересовывает всё дерево Web-приложения. (Не очень эффективно, но для обучения подойдет) 
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addMessage={addMessage} addPost={addPost} updatePostText={updatePostText} updateTextNewMessage={updateTextNewMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree();
subscribe(rerenderEntireTree); 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
