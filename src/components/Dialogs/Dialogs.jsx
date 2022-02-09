import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
const Dialogs = (props) => {
    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="dialogs/1">Egor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="dialogs/2">Vasia</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="dialogs/3">Gigant</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="dialogs/4">Zora</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="dialogs/5">Sue</NavLink>
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