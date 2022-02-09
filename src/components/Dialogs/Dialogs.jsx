import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = () => {
    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogs_items}>
                <Dialog name="Egor" id="1" />
                <Dialog name="Vasia" id="2" />
                <Dialog name="Gerald" id="3" />
                <Dialog name="Sue" id="4" />
                <Dialog name="Inokentiy" id="5" />
            </div>
            <div className={classes.messages}>
                <Message text="Hi" />
                <Message text="How is your video-course?" />
                <Message text="Fine, thank you!" />
            </div>
        </div>
    )
}

export default Dialogs