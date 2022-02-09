import classes from './My_posts.module.css'
import Post from './Post/Post';

const My_posts = () => {
  return (
    <div>
      <div className={classes.item}>
        <h4>My posts</h4>
      </div>
      <div>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <button>Add post</button>      
      </div>
      <Post message="Привет! Как дела?" number="5"/>
      <Post message="Спасибо. Отлично!" number="10"/>
      <Post message="Уау!" number="200"/>
    </div>)
};

export default My_posts;