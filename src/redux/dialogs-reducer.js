const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_TEXT_NEW_MESSAGE = "UPDATE-TEXT-NEW-MESSAGE";

    const addNewMessageDialogsReducer = (state, action) => {
        // Functions for dialogsPage:
        switch(action.type) {
            case NEW_MESSAGE:
                state.messagesData.push({ id: 6, text: action.newMessage, });
                state.newMessage = "";
                return state;
                // break можно не писать в данный момент после case, так как мы используем return
            case UPDATE_TEXT_NEW_MESSAGE:
                state.newMessage = action.newMessage;
                return state;
                // break можно не писать в данный момент после case, так как мы используем return
            default:
                return state;
        }
    };

export default addNewMessageDialogsReducer;

export const addMessageActionCreator = (text) => {
    return { type: NEW_MESSAGE, newMessage: text}
}
export const updateTextNewMessageActionCreator = (text) => {
    return { type: UPDATE_TEXT_NEW_MESSAGE, newMessage: text }
}
