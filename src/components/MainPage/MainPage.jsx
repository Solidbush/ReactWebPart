import React from "react";
import style from "./MainPage.module.css"
import {NavLink} from "react-router-dom";
import playButton from "../../assets/images/main-page/play__button.png"
import {useTopCourses} from "../../store";

const MainPage = () => {
    const topCourses = useTopCourses((store) => store.topCoursesData)
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
                        topCourses.map((course) =>
                            <NavLink id={course.id} to={course.path}><img src={course.link} alt={course.alt}/></NavLink>
                        )
                    }
                </div>
            </section>
        </div>
    )
}

export default MainPage;