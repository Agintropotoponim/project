import NavBlock from "../components/UI/Nav/NavBlock";
import Teamleads from "../components/UI/Teamleads/Teamleads";
import WhyWithUs from "../components/UI/WhyWithUs/WhyWithUs";


import classes from './MainPage.module.css'

import SliderTourBlock from "../components/UI/slider/SliderTourBlock";



function MainPage() {

    //const user = AuthService.decryptAndGetDataFromLocalStorage();
    //console.log(user)

    return (
        <main className={classes.flex__container}>
            <NavBlock />
            <SliderTourBlock />
            <WhyWithUs />
            <Teamleads />
        </main>
    )
}

export default MainPage;