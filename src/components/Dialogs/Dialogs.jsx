import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from 'react'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((dialog) => <Dialog
        name={dialog.name}
        id={dialog.id}
        avatar={dialog.avatar} />)
    let messagesElements = props.messagesData.map(message => <Message
        text={message.text} />)

    let newMessageElement = React.createRef();    

    let addMessage = () => {
        let text = newMessageElement.current.value
        alert(text);
    }

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    <textarea ref={newMessageElement} cols="30" rows="4"></textarea>
                    <button onClick={addMessage}>Sent</button>
                </div>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs