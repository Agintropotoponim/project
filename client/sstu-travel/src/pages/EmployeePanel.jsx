import { useState } from "react";
import NavBar from "../components/UI/Nav/NavBar";
import classes from './EmployeePanel.module.css'
import EmployeeService from "../services/EmployeeService";
import AuthService from "../services/AuthService";

function EmployeePanel() {


    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [cover, setCover] = useState("");
    const [price, setPrice] = useState(0);
    const [startDate, setStartDate] = useState(new Date());

    const user = AuthService.decryptAndGetDataFromLocalStorage();


    return (

        <div>
            <NavBar />
            {
                user.roles.includes("ROLE_EMPLOYEE")
                    ?
                    <div className={classes.flex}>
                        <input className={classes.input} type="text" placeholder="name" value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input className={classes.input} type="text" placeholder="description" value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />

                        <input className={classes.input} type="text" placeholder="cover" value={cover}
                            onChange={(e) => setCover(e.target.value)}
                        />
                        <input className={classes.input} type="text" placeholder="price" value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <input className={classes.input} type="date" placeholder="dd.mm.yyyy" value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <button className={classes.button}
                            onClick={() => {
                                EmployeeService.createTour(
                                    {
                                        name: name,
                                        description: desc,
                                        usr: user.id,
                                        cover: cover,
                                        price: price,
                                        start_date: startDate
                                    }
                                )
                            }}
                        >
                            Создать тур
                        </button>
                    </div>
                    : ""
            }
        </div>
    );
}

export default EmployeePanel;