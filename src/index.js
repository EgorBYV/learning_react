import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state'

// Запускает первую прорисовку приложения в браузере при первой загрузке страницы.

export let rerenderEntireTree = () => {
  // Перересовывает всё дерево Web-приложения. (Не очень эффективно, но для обучения подойдет) 
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()}
        addMessage={store.addMessage.bind(store)}
        addPost={store.addPost.bind(store)}
        updatePostText={store.updatePostText.bind(store)}
        updateTextNewMessage={store.updateTextNewMessage.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
