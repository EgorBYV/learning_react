import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'

const Dialogs = (props) => {
    // Компанента, возвращающая список из пользователей (в виде компанент), с которыми есть(будут) диалоги, 
    // сообщения в диалогах, поле ввода текста сообщения и кнопку, отправляющую сообщение в базу.

    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => <Dialog
        // Компанента, возращающая элемент(диалог) списка диалогов. Назначает имя, ID, аватар пользователя из базы в state.js
        name={dialog.name}
        key={dialog.id}
        id={dialog.id}
        avatar={dialog.avatar} />)

    let messagesElements = props.dialogsPage.messagesData.map(message => <Message
        // Возвращает (публикует) сообщения из state
        text={message.text} 
        key={message.id}/>)

    let newMessageElement = React.createRef();
    let textMessage = props.dialogsPage.newMessage;

    let addMessage = () => {
        // Добавляет введенный пользователем текст в state
        let text = newMessageElement.current.value
        props.addText(text);
    }

    let updateMessage = () => {
        // Посимвольно изменяет в state текст, введенный пользователем. 
        let text = newMessageElement.current.value
        props.updateText(text)
    }

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={updateMessage}
                        ref={newMessageElement} cols="30" rows="3"
                        value={textMessage} >
                    </textarea>
                    <button onClick={addMessage}>Sent</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs