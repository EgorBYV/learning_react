const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_TEXT_NEW_MESSAGE = "UPDATE-TEXT-NEW-MESSAGE";

    const addNewMessageDialogsReducer = (state, action) => {
        // Functions for dialogsPage:
        if (action.type === NEW_MESSAGE) {
            state.messagesData.push({ id: 6, text: action.newMessage, });
            state.newMessage = "";
        }
        else if (action.type === UPDATE_TEXT_NEW_MESSAGE) {
            state.newMessage = action.newMessage;
        };
        return state;
    };

export default addNewMessageDialogsReducer;
