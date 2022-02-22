import React from 'react'
import { connect } from 'react-redux'
import { addMessageActionCreator, updateTextNewMessageActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

// const Dialogs_Container = () => {
//     // Компанента, возвращающая список из пользователей (в виде компанент), с которыми есть(будут) диалоги, 
//     // сообщения в диалогах, поле ввода текста сообщения и кнопку, отправляющую сообщение в state

//      return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store;
//                 let updateText = (text) => {
//                     // Посимвольно изменяет в state текст, введенный пользователем. 
//                     let action = updateTextNewMessageActionCreator(text);
//                     state.dispatch(action)
//                 }
            
//                 let addText = (text) => {
//                     // Добавляет введенный пользователем текст в state
//                     let action = addMessageActionCreator(text)
//                     state.dispatch(action);
            
//                 }
//                 return <Dialogs updateText={updateText} 
//                 addText={addText} 
//                 dialogsPage={state.getState().dialogsPage}>
//                 </Dialogs>}}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            dispatch(updateTextNewMessageActionCreator(text))
        },
        addText: (text) => {
            dispatch(addMessageActionCreator(text))
        }
    }
}
const Dialogs_Container = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default Dialogs_Container