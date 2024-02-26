import React, {useEffect, useState} from "react"
import CourseItem from "./CourseItem/CourseItem";
import style from "./AllCourses.module.css"
import LoadTimeFooter from "./LoadTimeFooter/LoadTimeFooter";
import axios from "axios";

let AllCoursesPage = (props) => {
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
            <ul className={style.cards}>
                {props.courses.map((course) =>
                    <CourseItem course={course} sign_up={props.sign_up} sign_out={props.sign_out}/>
                )}
            </ul>
            <LoadTimeFooter serverTime={time}/>
        </div>
    )
}

export default AllCoursesPage;