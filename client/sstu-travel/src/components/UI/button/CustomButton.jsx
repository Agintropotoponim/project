import classes from './CustomButton.module.css'

function CustomButton(props) {
    return (
        <div className={classes.nav__btn}>
            {props.text}
        </div>
    );
}

export default CustomButton;