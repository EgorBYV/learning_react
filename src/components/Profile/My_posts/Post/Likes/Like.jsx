import classes from './Like.module.css'

const Like = (props) => {
  let text = props.number + " " + "likes";
  return (
    <div className={classes.Like}>
      <div>
       {text} 
       <button>Like</button> 
       <button>Remove</button>
      </div>
    </div>)
};

export default Like;