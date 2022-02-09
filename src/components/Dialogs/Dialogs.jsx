import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsData = [
        {id: 6, name: 'Alberth'},
        {id: 7, name: 'Victoria'},
        {id: 8, name: 'Romualda'},
        {id: 9, name: 'Germiona'},
        {id: 10, name: 'Antoniy'},
    ]

    let messagesData = [
        {id: 4, text: 'You'},
        {id: 5, text: 'Kick'},
        {id: 6, text: 'My name is Barry'},
        {id: 7, text: 'JavaScript is my favorite language.'},
        {id: 8, text: "Swift is my wife's favorite language."},
    ]

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogs_items}>
            <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
            <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
                <Dialog name="Egor" id="1" />
                <Dialog name="Vasia" id="2" />
                <Dialog name="Gerald" id="3" />
                <Dialog name="Sue" id="4" />
                <Dialog name="Inokentiy" id="5" />
            </div>
            <div className={classes.messages}>
                <Message text={messagesData[0].text}/>
                <Message text={messagesData[1].text}/>
                <Message text={messagesData[2].text}/>
                <Message text={messagesData[3].text}/>
                <Message text={messagesData[4].text}/>
                <Message text="Hi" />
                <Message text="How is your video-course?" />
                <Message text="Fine, thank you!" />
            </div>
        </div>
    )
}

export default Dialogs