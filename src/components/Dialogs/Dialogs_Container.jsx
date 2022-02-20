import React from 'react'
import { addMessageActionCreator, updateTextNewMessageActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const Dialogs_Container = (props) => {
    // Компанента, возвращающая список из пользователей (в виде компанент), с которыми есть(будут) диалоги, 
    // сообщения в диалогах, поле ввода текста сообщения и кнопку, отправляющую сообщение в state

    let updateText = (text) => {
       // Посимвольно изменяет в state текст, введенный пользователем. 
        let action = updateTextNewMessageActionCreator(text);
        props.dispatch(action)
    }

    let addText = (text) => {
        // Добавляет введенный пользователем текст в state
        let action = addMessageActionCreator(text)
        props.dispatch(action);
        
    }

    return (<Dialogs updateText={updateText} addText={addText} dialogsPage={props.dialogsPage}
    />)
}

export default Dialogs_Container