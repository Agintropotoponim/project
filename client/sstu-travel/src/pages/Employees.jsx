import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import $api from "../http";
import classes from './Employees.module.css'
import Tour from "../components/UI/Tour/Tour";
import NavBar from "../components/UI/Nav/NavBar";

function Emoloyees() {


    const params = useParams()

    const [employees, setEmployees] = useState([]);
    const [tours, setTours] = useState([]);


    useEffect(() => {
        $api.get('/employees/' + params.id).then(res => {
            setEmployees(res.data.usr)
            setTours(res.data.tours)
        })
    }, [])


    return (
        <div className={classes.bigPlate}>
            <NavBar />
            <div className={classes.bigPlate}>
                <img className={classes.poster} src={employees.poster} alt="" />
                <div>{employees.name + " " + employees.surname}</div>
            </div>
            <div className={classes.plate}>
                {tours.map(t =>
                    <Link to={`/tours/${t.id}`}>
                        <Tour
                            className={classes.tour}
                            cover={t.cover}
                            text={t.name}
                            leader={""}
                        />
                    </Link>
                )}
            </div>

        </div >
    );
}

export default Emoloyees;