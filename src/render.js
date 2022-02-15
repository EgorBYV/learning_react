import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, { addMessage, addPost, updatePostText, updateTextNewMessage } from './redux/state'

export let rerenderEntireTree = () => {
// Перересовывает всё дерево Web-приложения. (Не очень эффективно, но для обучения подойдет) 
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addMessage={addMessage} addPost={addPost} updatePostText={updatePostText} updateTextNewMessage={updateTextNewMessage}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
    }

