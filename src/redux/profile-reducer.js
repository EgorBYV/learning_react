const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
    postsData: [
        { id: 1, text: 'Привет!', number: 11 },
        { id: 2, text: 'Здравствуй, Солнышко!', number: 12 },
        { id: 3, text: 'Как у тебя дела?', number: 9 },
        { id: 4, text: 'Спасибо! Хорошо! Скучаю по тебе!', number: 1 },
        { id: 5, text: "Я тоже очень скучаю по тебе. Рада, что у тебя всё хорошо! Давай увидимся! Ты когда свободен?", number: 4 },
    ],
    text: "Вот такое вот сообщение",
};

const profileReducer = (state = initialState, action) => {
    // Functions for profilePage:
    switch (action.type) {
        case ADD_POST:
            state.postsData.push({ id: 6, text: action.newPost, number: 0 });
            state.text = "";
            return state;
            // break можно не писать в данный момент после case, так как мы испульзуем return
        case UPDATE_POST_TEXT:
            state.text = action.newPost;
            return state;
            // break можно не писать в данный момент после case, так как мы испульзуем return
        default:
            return state;
        }
};

export default profileReducer;

export const addPostActionCreator = (NewText) => {
    return {type: ADD_POST, newPost: NewText }
}
export const updatePostTextActionCreator = (NewText) => {
    return { type: UPDATE_POST_TEXT, newPost: NewText}
}
