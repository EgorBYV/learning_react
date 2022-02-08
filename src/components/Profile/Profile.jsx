import classes from './Profile.module.css'
import My_posts from './My_posts/My_posts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://www.jetstar.com/_/media/inspiration-hub/article-images/19oct/hawaii-honolulu-need-to-know/hero_hawaii_honolulu.jpg?rev=cf08627cd0164b12b48d7e2af03abec6&w=1050&rc=1&cw=1050&ch=590&cx=55&cy=0&hash=67AF8851437B4D5433D7F1886992F8120F580B73"></img>
      </div>
      <div className={classes.item}>
        <p>Main content</p>
      </div>
      <My_posts />
    </div>)
};

export default Profile;