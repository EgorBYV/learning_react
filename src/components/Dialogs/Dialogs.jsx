import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'
import { addUser } from '../../redux/state'

const Dialogs = (props) => {
// Компанента, возвращающая список из пользователей (в виде компанент), с которыми есть(будут) диалоги, 
// сообщения в диалогах, поле ввода текста сообщения и кнопку, отправляющую сообщение в базу.

    let dialogsElements = props.dialogsData.map((dialog) => <Dialog
    // Компанента, возращающая элемент(диалог) списка диалогов. Назначает имя, ID, аватар пользователя из базы в state.js
        name={dialog.name}
        id={dialog.id}
        avatar={dialog.avatar} />)

    let messagesElements = props.messagesData.map(message => <Message
    // Возвращает (публикует) сообщение из базы в state.js
        text={message.text} />)

    let newNameUserElement = React.createRef();    

    let addText = () => {
        // Добавляет введенный пользователем текст(имя) в базу в state.js (но не сохраняет в файле)
        let text = newNameUserElement.current.value
        addUser(text);
    }

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    <textarea ref={newNameUserElement} cols="30" rows="4"></textarea>
                    <button onClick={addText}>Sent</button>
                </div>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs