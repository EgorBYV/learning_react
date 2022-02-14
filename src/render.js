import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state'
import { addUser } from './redux/state';

export let rerenderEntireTree = () => {
// Перересовывает всё дерево Web-приложения 
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addUser={addUser}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
    }

