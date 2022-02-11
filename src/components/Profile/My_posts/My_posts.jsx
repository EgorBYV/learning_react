import classes from './My_posts.module.css'
import Post from './Post/Post';
import React from 'react';

const My_posts = (props) => {

  // let postsData = props.postsData 
  let postElement = props.postsData.map( element => <Post message={element.text} number={element.id} />)

  let newPostElement = React.createRef();  
  
  let addPost = () => {
   let text = newPostElement.current.value;
   alert(text); 
  }

  return (
    <div>
      <div className={classes.item}>
        <h4>My posts</h4>
      </div>
      <div>
        <textarea ref={newPostElement} cols="30" rows="3"></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      {postElement}
      <Post message="Привет! Как дела?" number="5" />
      <Post message="Спасибо. Отлично!" number="10" />
      <Post message="Уау!" number="200" />
    </div>)
};

export default My_posts;