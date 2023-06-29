import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import $api, { $api_bananz, API_BANANZ, API_KEY } from "../http";
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


    const navigate = useNavigate()



    const user = AuthService.decryptAndGetDataFromLocalStorage();





    useEffect(() => {
        $api.get('/tours/' + params.id).then(res => {
            setTour(res.data)
            setEmp(res.data.employee.usr)
            setDate(res.data.start_date)

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
                        <div>Дата начала: {tour.start_date}</div>
                    </div>
                </div>
            </div>

            <div className={classes.plate}>
                <button
                    onClick={async () => {

                        if (user.name && user.surname && user.middle_name) {

                            UserService.checkBuy({ user_id: user.id, tour_id: params.id }).then(res => {

                                if (res.data != true) {
                                    alert("Вы уже приобрели данный тур")
                                    return
                                }

                                const formDate = date.split(".")
                                let dateOfStart = new Date(formDate[2], formDate[1] - 1, formDate[0])
                                let currDate = new Date()

                                if (dateOfStart > currDate) {

                                    console.log("after validation")

                                    $api_bananz.get(`/createApiPaymentLink?livingTime=300000&priceType=4&price=${tour.price}&apikey=${API_KEY}`).then(res => {

                                        console.log(res)

                                        window.open(res.data.link, '_blank');

                                        alert("Не покидайте и не обновляйте эту страницу до оплаты, чтобы страницы оплаты оставалась валидной")

                                        let timerId = setInterval(() => {

                                            console.log("working")

                                            $api_bananz.post(`/getInfoByPaymentLink?linkKey=${res.data.linkKey}`).then(
                                                res => {

                                                    if (res.data.paymentStatus == 1) {
                                                        clearInterval(timerId)
                                                        UserService.buyTour({
                                                            user_id: user.id,
                                                            tour_id: params.id
                                                        })
                                                        navigate("/profile")
                                                    }
                                                }
                                            )
                                        }, 5000);

                                        setTimeout(() => { clearInterval(timerId); }, 300000);

                                    })

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