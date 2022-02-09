import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Egor
                </div>
                <div className={classes.dialog}>
                    Vasia
                </div>
                <div className={classes.dialog}>
                    Gigant
                </div>
                <div className={classes.dialog}>
                    Zora
                </div>
                <div className={classes.dialog}>
                    Sue
                </div>

            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hi!
                </div>
                <div className={classes.message}>
                    How is your video-course?
                </div>
                <div className={classes.message}>
                    Fine, thank you!
                </div>
            </div>
        </div>
    )
}

export default Dialogs