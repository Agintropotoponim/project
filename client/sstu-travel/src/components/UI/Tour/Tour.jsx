import classes from './Tour.module.css'

function Tour(props) {

    return (
        <div>
            <h1 className={classes.font}>{props.id}</h1>
            <div className={classes.font + " " + classes.red}>{props.text + " " + props.leader}</div>
        </div>
    )
}

export default Tour;