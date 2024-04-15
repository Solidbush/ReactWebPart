import {singOutActionCreator, singUpActionCreator} from "../../redux/all-courses-reducer";
import {connect} from "react-redux";
import AllCoursesPage from "./AllCoursesPage";

let mapStateToProps = (state) => {
    return {
        courses: state.allCoursesPage.coursesData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sign_up: (id) => {
            let action = singUpActionCreator(id);
            dispatch(action);
        },

        sign_out: (id) => {
            let action = singOutActionCreator(id);
            dispatch(action);
        }
    }
}

const AllCoursesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCoursesPage);

export default AllCoursesContainer;