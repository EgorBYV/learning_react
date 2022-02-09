import classes from './My_posts.module.css'
import Post from './Post/Post';

const My_posts = () => {

  let postsData = [
    {id: 1, text: 'Привет!', number: 11},
    {id: 2, text: 'Привет', number: 12},
    {id: 3, text: 'Как у тебя дела?', number: 9},
    {id: 4, text: 'Спасибо! Хорошо! Скучаю по тебе!', number: 1},
    {id: 5, text: "Я тоже очень скучаю по тебе. Рада, что у тебя всё хорошо! Давай увидимся! Ты когда свободен?", number: 4},
]


  return (
    <div>
      <div className={classes.item}>
        <h4>My posts</h4>
      </div>
      <div>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <button>Add post</button>      
      </div>

      <Post message={postsData[0].text} number={postsData[0].number}/>
      <Post message={postsData[1].text} number={postsData[1].number}/>
      <Post message={postsData[2].text} number={postsData[2].number}/>
      <Post message={postsData[3].text} number={postsData[3].number}/>
      <Post message={postsData[4].text} number={postsData[4].number}/>
      <Post message="Привет! Как дела?" number="5"/>
      <Post message="Спасибо. Отлично!" number="10"/>
      <Post message="Уау!" number="200"/>
    </div>)
};

export default My_posts;