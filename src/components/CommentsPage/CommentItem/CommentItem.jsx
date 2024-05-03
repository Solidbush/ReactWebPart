import React from "react";
import style from "../../AllCoursesPage/CourseItem/CourseItem.module.css"

let CommentItem = (props) => {
    return (
        <li className={style.cards__item}>
            <article className={style.card}>
                <div className={style.card__content}>
                    <h3 className={style.card__title}>{`Автор id: ${props.comment.id}`}</h3>
                    <p className={style.card__description}>{props.comment.text}</p>
                </div>
            </article>
        </li>
    )
}

export default CommentItem;