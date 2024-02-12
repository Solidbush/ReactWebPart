import React from "react"
import CourseItem from "./CourseItem/CourseItem";
import style from "./AllCourses.module.css"

let AllCoursesPage = (props) => {
    return (
        <ul className={style.cards}>
            {props.courses.map((course) =>
                <CourseItem course={course} sign_up={props.sign_up} sign_out={props.sign_out} />
            )}
        </ul>
    )
}

export default AllCoursesPage;