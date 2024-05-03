import React, {useEffect} from "react"
import CourseItem from "./CourseItem/CourseItem";
import style from "./AllCourses.module.css"
import {useCourses} from "../../store";
import LoadingError from "../LoadingError/LoadingError";
import { Vortex } from 'react-loader-spinner'


let AllCoursesPage = (props) => {
    const { courses, fetchCourses, loading, error } = useCourses((state) => ({
        courses: state.courses,
        fetchCourses: state.fetchCourses,
        loading: state.loading,
        error: state.error
    }))

    useEffect(() => {
        fetchCourses()
    }, []);

    if (loading) {
        return <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
    }

    if (error) {
        return <LoadingError title={"Ошибка при загрузке курсов"} descripton={"Если ошибка с нашей стороны, то мы уже скоро починим ее. Приносим свои извинения!"}/>
    }

    return (
        <div>
            <ul className={style.cards}>
                {courses.map((course) =>
                    <CourseItem course={course} sign_up={props.sign_up} sign_out={props.sign_out}/>
                )}
            </ul>
        </div>
    )
}

export default AllCoursesPage;