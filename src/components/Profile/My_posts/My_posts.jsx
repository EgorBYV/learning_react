import classes from './My_posts.module.css'
import Post from './Post/Post';
const My_posts = () => {
  return (
    <div>
      <div className={classes.item}>
        <p>My posts</p>
      </div>
      <div>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <button>Add post</button>      
      </div>
      <Post />
      <Post />
      <Post />
    </div>)
};

export default My_posts;