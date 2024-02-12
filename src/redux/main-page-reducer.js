import Csharp from "../assets/images/main-page/c.png";
import Cplus from "../assets/images/main-page/c++.png";
import python from "../assets/images/main-page/python.png";
import java from "../assets/images/main-page/java.png";

let initialState = {
    topCoursesData: [
        {id: 1, link: Csharp, alt: "C# Course", path: "#"},
        {id: 2, link: Cplus, alt: "C++Course", path: "#"},
        {id: 3, link: python, alt: "Python Course", path: "#"},
        {id: 4, link: java, alt: "Java Course", path: "#"}
    ]
}

const mainPageReducer = (state = initialState, action) => {
    return state;
}

export default mainPageReducer;