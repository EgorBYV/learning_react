import classes from './Like.module.css'

const Like = (props) => {
  return (
    <div className={classes.Like}>
      <div>
       {props.number} 
       <button>Like</button> 
       <button>Remove</button>
      </div>
    </div>)
};

export default Like;