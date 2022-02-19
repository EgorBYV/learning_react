const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const addNewPostProfileReducer = (state, action) => {
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

export default addNewPostProfileReducer;

export const addPostActionCreator = (NewText) => {
    return {type: ADD_POST, newPost: NewText }
}
export const updatePostTextActionCreator = (NewText) => {
    return { type: UPDATE_POST_TEXT, newPost: NewText}
}
