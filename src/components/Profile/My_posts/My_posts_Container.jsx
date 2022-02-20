import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer'
import My_posts from './My_posts';

const My_posts_Container = (props) => {
  // Отрисовывает посты из базы в state.js, поле ввода текста для нового поста, кропку добавления нового поста.

  let onPostChange = (newText) => {
    let action = updatePostTextActionCreator(newText);
    props.dispatch(action);
  }

  function addNewPost(newText) {
    let action = addPostActionCreator(newText);
    props.dispatch(action);
  }

  return (<My_posts updatePostChange={onPostChange}
    addPostClick={addNewPost}
    posts={props.profilePage}
    />)
};

export default My_posts_Container;
