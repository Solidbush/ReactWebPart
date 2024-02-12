import C from "../assets/images/all-courses-page/1C.jpg"
import Go from "../assets/images/all-courses-page/Go.jpg"
import HTML from "../assets/images/all-courses-page/HTML.jpg"
import Kotlin from "../assets/images/all-courses-page/Kotlin.jpg"
import KotlinNext from "../assets/images/all-courses-page/KotlinNext.jpg"
import Messages from "../assets/images/all-courses-page/Messages.jpg"
import PythonYoung from "../assets/images/all-courses-page/PythonYoung.jpg"
const SING_UP = "SING-UP";
const SING_OUT = "SING-OUT";

let initialState = {
    coursesData: [
        {id: 1, link: C, title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", sign_up: false, alt: "1C"},
        {id: 2, link: Go, title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", sign_up: false, alt: "Go"},
        {id: 3, link: HTML, title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", sign_up: false, alt: "HTML"},
        {id: 4, link: Kotlin, title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", sign_up: false, alt: "Kotlin"},
        {id: 5, link: KotlinNext, title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", sign_up: false, alt: "KotlinNex"},
        {id: 6, link: Messages, title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", sign_up: false, alt: "Message"},
        {id: 7, link: PythonYoung, title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", sign_up: false, alt: "PythonYoung"}
    ]
}

const allCoursesReducer = (state = initialState, action) => {
    switch (action.type){
        case SING_UP: {
            let stateCopy = {...state};
            stateCopy.coursesData = [...stateCopy.coursesData];
            stateCopy.coursesData.map((course) => {
                if (course.id === action.id) {
                    course.sign_up = true;
                }
            })

            return stateCopy;
        }

        case SING_OUT: {
            let stateCopy = {...state};
            stateCopy.coursesData = [...stateCopy.coursesData];
            stateCopy.coursesData.map((course) => {
                if (course.id === action.id) {
                    course.sign_up = false;
                }
            })

            return stateCopy;
        }

        default:

            return state;
    }
}

export const singUpActionCreator = (course_id) => ({
    type: SING_UP,
    id: course_id
})

export const singOutActionCreator = (course_id) => ({
    type: SING_OUT,
    id: course_id
})

export default allCoursesReducer;