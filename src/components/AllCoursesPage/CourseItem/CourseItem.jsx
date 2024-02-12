import React from "react";
import style from "./CourseItem.module.css"

let CourseItem = (props) => {
    let sign_action = () => {
        if (props.course.sign_up) {
            props.sign_out(props.course.id)
        }
        else {
            props.sign_up(props.course.id)
        }

    }

    return (
        <li className={style.cards__item}>
            <article className={style.card}>
                <div className={style.card__image}>
                    <img src={props.course.link} alt={props.course.alt}/>
                </div>
                <div className={style.card__content}>
                    <h3 className={style.card__title}>{props.course.title}</h3>
                    <p className={style.card__description}>{props.course.description}</p>
                    <button onClick={ sign_action } className={style.card__button}>{props.course.sign_up ? "Вы записаны!" : "Записаться!"}</button>
                </div>
            </article>
        </li>
    )
}

export default CourseItem;