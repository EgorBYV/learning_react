import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer'
import My_posts from './My_posts';
import StoreContext from '../../../StoreContext';

const My_posts_Container = () => {
  // Отрисовывает посты из базы в state.js, поле ввода текста для нового поста, кропку добавления нового поста.
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store;

        let onPostChange = (newText) => {
          let action = updatePostTextActionCreator(newText);
         state.dispatch(action);
        }
      
        function addNewPost(newText) {
          let action = addPostActionCreator(newText);
          state.dispatch(action);
        }
        return <My_posts updatePostChange={onPostChange}
          addPostClick={addNewPost}
          posts={state.getState().profilePage} />
      }}
    </StoreContext.Consumer>
    )
};

export default My_posts_Container;
