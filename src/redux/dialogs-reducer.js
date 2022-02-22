const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_TEXT_NEW_MESSAGE = "UPDATE-TEXT-NEW-MESSAGE";

let initialState = {
    dialogsData: [
        { id: 1, name: 'Alberth', avatar: 'https://globalmsk.ru/usr/person/big-person-15642464591.jpg' },
        { id: 2, name: 'Victoria', avatar: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/17/2859972401.jpg" },
        { id: 3, name: 'Romualda', avatar: 'https://i.pinimg.com/736x/97/6a/0a/976a0a64749a8825b416e1a2dfbcd456.jpg' },
        { id: 4, name: 'Germiona', avatar: 'https://ic.pics.livejournal.com/dubikvit/65747770/9409940/9409940_900.jpg' },
        { id: 5, name: 'Antoniy', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1841592/pub_5c9691e0eca9d500b2d26159_5c969779fbaed100af8d11f7/scale_1200' },
    ],
    messagesData: [
        { id: 1, text: 'You' },
        { id: 2, text: 'Kick' },
        { id: 3, text: 'My name is Barry' },
        { id: 4, text: 'JavaScript is my favorite language.' },
        { id: 5, text: "Swift is my wife's favorite language." },
    ],
    newMessage: "Введи текст сообщения сюда",
}

    const dialogsReducer = (state = initialState, action) => {
        // Functions for dialogsPage:
        switch(action.type) {
            case NEW_MESSAGE: {
                let stateCopy = {...state}
                stateCopy.messagesData = [...state.messagesData]
                stateCopy.messagesData.push({ id: 6, text: action.newMessage, })
                stateCopy.newMessage = ""
                return stateCopy
                // break можно не писать в данный момент после case, так как мы используем return
            }
            case UPDATE_TEXT_NEW_MESSAGE: {
                let stateCopy = {...state} 
                stateCopy.newMessage = action.newMessage
                return stateCopy
                // break можно не писать в данный момент после case, так как мы используем return
            }
            default:
                return state
        }
    };

export default dialogsReducer

export const addMessageActionCreator = (text) => {
    return { type: NEW_MESSAGE, newMessage: text}
}
export const updateTextNewMessageActionCreator = (text) => {
    return { type: UPDATE_TEXT_NEW_MESSAGE, newMessage: text }
}
