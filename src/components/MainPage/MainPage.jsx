import React, {useEffect, useState} from "react";
import style from "./MainPage.module.css"
import {NavLink} from "react-router-dom";
import playButton from "../../assets/images/main-page/play__button.png"
import LoadTimeFooter from "../AllCoursesPage/LoadTimeFooter/LoadTimeFooter";
import axios from "axios";
const MainPage = (props) => {
    const [time, setTime] = useState('-1');

    useEffect(() => {
        axios.get('https://backend-part-project-ni65.onrender.com/get-request')
            .then((repos) => {
                const {time} = repos.data.headers
                console.log(time)
                setTime(time)
            });
    }, [setTime]);

    return (
        <div>
            <section className={style}>
                <h1 className={style.hi__title}>Онлайн курсы - это <br/> современное образование!</h1>
                <h3 className={style.hi__subtitle}>Авторские курсы от ведущих IT  <br/> специалистов России</h3>
            </section>
            <section className={style.request}>
                <form className={style.bid__button} method="post" action="http://localhost/inp/bidrequest">
                    <button type="submit">Отправить заявку</button>
                </form>
                <div className={style.play__button}>
                    <button type="submit"><img src={playButton} alt="Play video"/></button>
                </div>
                <div className={style.notion}>Посмотрите видео-отчет выпускников</div>
            </section>
            <section className={style}>
                <div className={style.courses__row}>
                    {
                        props.topCourses.map((course) =>
                            <NavLink id={course.id} to={course.path}><img src={course.link} alt={course.alt}/></NavLink>
                        )
                    }
                </div>
            </section>
            <LoadTimeFooter serverTime={time}/>
        </div>
    )
}

export default MainPage;