const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

    const addNewPostProfileReducer = (state, action) => {
        // Functions for profilePage:
        if (action.type === ADD_POST) {
            state.postsData.push({ id: 6, text: action.newPost, number: 0 });
            state.text = "";
        }
        else if (action.type === UPDATE_POST_TEXT) {
            state.text = action.newPost;
        };
        return state;
    };    

export default addNewPostProfileReducer;

