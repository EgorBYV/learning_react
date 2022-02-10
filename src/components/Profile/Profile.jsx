import classes from './Profile.module.css'
import My_posts from './My_posts/My_posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <div className={classes.profileBlok}>
        <My_posts postsData={props.postsData}/>
      </div>
    </div>)
};

export default Profile;