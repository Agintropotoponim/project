import classes from './Tour.module.css'

function Tour(props) {

    return (
        <div className={classes.tour}>
            <img className={classes.cover} src={props.cover} alt="cover" />
            <div className={classes.font}>{props.text}</div>
            <span className={classes.grey}>{props.leader}</span>
        </div>
    )
}

export default Tour;