import {connect} from "react-redux";
import MainPage from "./MainPage";

let mapStateToProps = (state) => {
    return {
        topCourses: state.mainPage.topCoursesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer;
