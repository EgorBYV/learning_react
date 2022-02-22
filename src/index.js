import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './StoreContext';

export let rerenderEntireTree = () => {
  // Перересовывает всё дерево Web-приложения. (Не очень эффективно, но для обучения подойдет) 
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
// Запускает первую прорисовку приложения в браузере при первой загрузке страницы.
rerenderEntireTree();
// вызов callback-функции чтобы вернуть в store функцию отрисовки всего дерева приложения
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
