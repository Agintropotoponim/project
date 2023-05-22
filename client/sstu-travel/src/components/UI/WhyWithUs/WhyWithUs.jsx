
import svg from '../../../assets/img/whywithus.svg'
import classes from './WhyWithUs.module.css'

function WhyWithUs() {
    return (
        <div className={classes.flex__container}>
            <h2 className={classes.header2}>
                Почему именно <span className={classes.span}>&nbsp; с нами?</span>
            </h2>
            <div>
                <img src={svg} alt="Why with us" />
            </div>
        </div>
    );
}

export default WhyWithUs;