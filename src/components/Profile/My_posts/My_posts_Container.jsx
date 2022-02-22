import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer'
import My_posts from './My_posts';
import { connect } from 'react-redux'

// const My_posts_Container = () => {
//   // Отрисовывает посты из базы в state.js, поле ввода текста для нового поста, кропку добавления нового поста.
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store;

//         let onPostChange = (newText) => {
//           let action = updatePostTextActionCreator(newText);
//           state.dispatch(action);
//         }

//         function addNewPost(newText) {
//           let action = addPostActionCreator(newText);
//           state.dispatch(action);
//         }
//         return <My_posts updatePostChange={onPostChange}
//           addPostClick={addNewPost}
//           posts={state.getState().profilePage} />
//       }}
//     </StoreContext.Consumer>
//   )
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPostClick: (newText) => {
      dispatch(addPostActionCreator(newText))
    },
    onPostChange: (newText) => {
      dispatch(updatePostTextActionCreator(newText))
    }
  }
}
const My_posts_Container = connect(mapStateToProps, mapDispatchToProps)(My_posts);

export default My_posts_Container;
