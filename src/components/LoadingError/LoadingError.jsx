import React from "react";
import style from "../AllCoursesPage/CourseItem/CourseItem.module.css"
import Error from "../../../src/assets/images/error.jpg"

let LoadingError = (props) => {
    return (
        <li className={style.cards__item}>
            <article className={style.card}>
                <div className={style.card__image}>
                    <img src={Error} alt={"Error with loading"}/>
                </div>
                <div className={style.card__content}>
                    <h3 className={style.card__title}>{props.title}</h3>
                    <p className={style.card__description}>{props.descripton}</p>
                </div>
            </article>
        </li>
    )
}

export default LoadingError;