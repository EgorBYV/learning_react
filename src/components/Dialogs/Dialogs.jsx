import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'
import { addMessageActionCreator, updateTextNewMessageActionCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {
    // Компанента, возвращающая список из пользователей (в виде компанент), с которыми есть(будут) диалоги, 
    // сообщения в диалогах, поле ввода текста сообщения и кнопку, отправляющую сообщение в базу.

    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => <Dialog
        // Компанента, возращающая элемент(диалог) списка диалогов. Назначает имя, ID, аватар пользователя из базы в state.js
        name={dialog.name}
        id={dialog.id}
        avatar={dialog.avatar} />)

    let messagesElements = props.dialogsPage.messagesData.map(message => <Message
        // Возвращает (публикует) сообщение из базы в state.js
        text={message.text} />)

    let newMessageElement = React.createRef();
    let textNewMessage = props.dialogsPage.newMessage;

    let addText = () => {
        // Добавляет введенный пользователем текст в базу в state.js (но не сохраняет в файле)
        let text = newMessageElement.current.value
        let action = addMessageActionCreator(text)
        props.dispatch(action);
        props.updateTextNewMessage("");
    }

    let updateText = () => {
        let text = newMessageElement.current.value
        let action = updateTextNewMessageActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={updateText}
                        ref={newMessageElement} cols="30" rows="3"
                        value={textNewMessage} >
                    </textarea>
                    <button onClick={addText}>Sent</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs