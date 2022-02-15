import classes from './Profile.module.css'
import My_posts from './My_posts/My_posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from '../../redux/state';

const Profile = (props) => {
  // Собирает в возвращает Компаненту с главной картинкой, её описанием, постами c содержимым из state.js,
  // полем ввода текста для нового поста и кнопкой для отправки в state.js и его публикации.
  return (
    <div>
      <ProfileInfo />
      <div className={classes.profileBlok}>
        <My_posts profilePage={props.profilePage} addPost={props.addPost} updatePostText={props.updatePostText}/>
      </div>
    </div>)
};

export default Profile;