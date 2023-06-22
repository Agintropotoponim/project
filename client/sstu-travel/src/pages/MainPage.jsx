import NavBlock from "../components/UI/Nav/NavBlock";
import Teamleads from "../components/UI/Teamleads/Teamleads";
import WhyWithUs from "../components/UI/WhyWithUs/WhyWithUs";


import classes from './MainPage.module.css'


import SliderEmployeeBlock from "../components/UI/slider/SliderEmployeeBlock";
import SliderTourBlock from "../components/UI/slider/SliderTourBlock";
import Feedbacks from "../components/UI/feedback/Feedbacks";
import FeedbackForm from "../components/UI/feedback/FeedbackForm";


function MainPage() {



    return (
        <main className={classes.flex__container}>
            <NavBlock />
            <SliderTourBlock />
            <WhyWithUs />
            <Teamleads />
            <Feedbacks />
            <FeedbackForm />
        </main>
    )
}

export default MainPage;