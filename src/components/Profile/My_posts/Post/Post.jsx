import classes from './Post.module.css'
import Like from './Likes/Like';

const Post = (props) => {
  return (
    <div className={classes.Post}>
      <div>
        <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"></img>
        {props.message}
      </div>
      <Like number={props.number}/>
    </div>)
};

export default Post;