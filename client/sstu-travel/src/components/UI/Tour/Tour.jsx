import classes from './Tour.module.css'

function Tour(props) {

    return (
        <div>
            <h1 className={classes.font}>{props.id}</h1>
            <div className={classes.font + " " + classes.red}>{props.text}</div>
            <span className={classes.blue}>{props.leader}</span>
        </div>
    )
}

export default Tour;