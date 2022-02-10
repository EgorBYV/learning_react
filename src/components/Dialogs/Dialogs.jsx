import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
       
    let dialogsElements = props.dialogsData.map((dialog) => <Dialog name={dialog.name} id={dialog.id} />)
    let messagesElements = props.messagesData.map(message => <Message text={message.text} />)

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs