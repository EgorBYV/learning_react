import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsData = [
        { id: 6, name: 'Alberth' },
        { id: 7, name: 'Victoria' },
        { id: 8, name: 'Romualda' },
        { id: 9, name: 'Germiona' },
        { id: 10, name: 'Antoniy' },
    ]

    let messagesData = [
        { id: 4, text: 'You' },
        { id: 5, text: 'Kick' },
        { id: 6, text: 'My name is Barry' },
        { id: 7, text: 'JavaScript is my favorite language.' },
        { id: 8, text: "Swift is my wife's favorite language." },
    ]
    
    let dialogsElements = dialogsData.map((dialog) => <Dialog name={dialog.name} id={dialog.id} />)
    let messagesElements = messagesData.map(message => <Message text={message.text} />)

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