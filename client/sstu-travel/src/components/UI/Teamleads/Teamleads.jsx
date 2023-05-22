import SliderEmployeeBlock from '../slider/SliderEmployeeBlock';
import classes from './Teamleads.module.css'

function Teamleads() {





    return (
        <div className={classes.flex__container}>
            <h2 className={classes.header2}>
                Тимлиды &nbsp;<span className={classes.span}> SSTU-Travel</span>
            </h2>
            <SliderEmployeeBlock />
        </div>
    );
}

export default Teamleads;