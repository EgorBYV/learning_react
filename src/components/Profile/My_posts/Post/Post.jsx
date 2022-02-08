import classes from './Post.module.css'

const Post = () => {
  return (
    <div className={classes.Post}>
      <div>
        <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"></img>
        Текст поста вот таткой вот длинный будет здесь. Прекрасно.
      </div>
      <div>
       <button>Like</button> 
       <button id="remove">Remove</button>
      </div>
    </div>)
};

export default Post;