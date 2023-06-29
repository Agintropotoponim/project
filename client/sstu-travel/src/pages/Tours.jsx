import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import $api from "../http";
import classes from './Employees.module.css'
import Tour from "../components/UI/Tour/Tour";
import NavBar from "../components/UI/Nav/NavBar";
import UserService from "../services/UserService";
import AuthService from "../services/AuthService";


function Tours() {


    const params = useParams()

    const [tour, setTour] = useState([]);
    const [emp, setEmp] = useState([]);
    const [date, setDate] = useState();

    const [status, setStatus] = useState(true);

    const navigate = useNavigate()




    const user = AuthService.decryptAndGetDataFromLocalStorage();











    useEffect(() => {
        $api.get('/tours/' + params.id).then(res => {
            setTour(res.data)
            setEmp(res.data.employee.usr)

            const parts = res.data.start_date.split('-');
            const formattedDateStr = `${parts[2]}.${parts[1]}.${parts[0]}`;
            setDate(formattedDateStr)
        })
    }, [])







    return (
        <div>
            <NavBar />
            <div className={classes.plate}>
                <div>
                    <Tour className={classes.tour} key={tour.id} cover={tour.cover} text={tour.name} leader={emp.name + " " + emp.surname} />
                    <div className={classes.bigPlate}>
                        <div>Описание: {tour.description}</div>
                        <div>Цена: {tour.price}</div>
                        <div>Дата начала: {date}</div>
                    </div>
                </div>
            </div>

            <div className={classes.plate}>
                <button
                    onClick={async () => {

                        console.log(user.name, user.surname, user.middle_name)
                        if (user.name && user.surname && user.middle_name) {

                            UserService.checkBuy({ user_id: user.id, tour_id: params.id }).then(res => {

                                if (res.data == true) {

                                } else {
                                    alert("Вы уже приобрели данный тур")
                                    return
                                }



                                const formDate = date.split(".")
                                let dateOfStart = new Date(formDate[2], formDate[1] - 1, formDate[0])
                                let currDate = new Date()

                                if (dateOfStart > currDate) {
                                    UserService.buyTour({
                                        user_id: user.id,
                                        tour_id: params.id
                                    })
                                    //navigate("/profile")
                                } else {
                                    alert("К сожалению, текущий тур уже недоступен")
                                }
                            })
                        } else {
                            alert("Заполните ФИО в профиле")
                        }
                    }}
                >Buy a tour</button>
            </div>

        </div >
    );
}

export default Tours;