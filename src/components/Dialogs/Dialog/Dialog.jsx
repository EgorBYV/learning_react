import classes from "./Dialog.module.css"
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <img className={classes.Avatar}src={props.avatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog