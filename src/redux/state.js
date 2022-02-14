// Date
let state = {
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Alberth', avatar: 'https://globalmsk.ru/usr/person/big-person-15642464591.jpg'},
            { id: 2, name: 'Victoria', avatar: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/17/2859972401.jpg"},
            { id: 3, name: 'Romualda', avatar: 'https://i.pinimg.com/736x/97/6a/0a/976a0a64749a8825b416e1a2dfbcd456.jpg'},
            { id: 4, name: 'Germiona', avatar: 'https://ic.pics.livejournal.com/dubikvit/65747770/9409940/9409940_900.jpg'},
            { id: 5, name: 'Antoniy', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1841592/pub_5c9691e0eca9d500b2d26159_5c969779fbaed100af8d11f7/scale_1200'},
        ],

        messagesData: [
            { id: 4, text: 'You' },
            { id: 5, text: 'Kick' },
            { id: 6, text: 'My name is Barry' },
            { id: 7, text: 'JavaScript is my favorite language.' },
            { id: 8, text: "Swift is my wife's favorite language." },
        ],
    },
    profilePage: {
        postsData: [
            { id: 1, text: 'Привет!', number: 11 },
            { id: 2, text: 'Здравствуй, Солнышко!', number: 12 },
            { id: 3, text: 'Как у тебя дела?', number: 9 },
            { id: 4, text: 'Спасибо! Хорошо! Скучаю по тебе!', number: 1 },
            { id: 5, text: "Я тоже очень скучаю по тебе. Рада, что у тебя всё хорошо! Давай увидимся! Ты когда свободен?", number: 4 },
        ],
    },
    sidebar: {},
}

export default state;

// Functions
export let addUser = (newUser) => {
    state.dialogsPage.dialogsData.push({id: 6, name: newUser, avatar: "",})
}