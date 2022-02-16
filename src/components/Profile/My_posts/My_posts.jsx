import classes from './My_posts.module.css'
import Post from './Post/Post';
import React from 'react';


const My_posts = (props) => {
// Отрисовывает посты из базы в state.js, поле ввода текста для нового поста, кропку добавления нового поста.
// 
  // Из массива с текстами постов в state.js формирует массив постов из коппаненты Post.
  let postElement = props.profilePage.postsData.map( element => <Post message={element.text} number={element.number} />)

  let newPostElement = React.createRef();  
  
  let addNewPost = () => {
   let newPost = newPostElement.current.value;
   props.addPost(newPost);
   props.updatePostText("");
  }

  function onPostChange() {
    let newText = newPostElement.current.value;
    props.updatePostText(newText);
  }

  return (
    <div>
      <div className={classes.item}>
        <h4>My posts</h4>
      </div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} cols="30" rows="3" value={props.profilePage.text}></textarea>
        <button onClick={addNewPost}>Add post</button>
      </div>
      {postElement}
    </div>);
};

export default My_posts;