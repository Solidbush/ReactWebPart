import {combineReducers, legacy_createStore} from "redux";
import mainPageReducer from "./main-page-reducer";
import allCoursesReducer from "./all-courses-reducer";


let reducers = combineReducers({
    mainPage: mainPageReducer,
    allCoursesPage: allCoursesReducer,
})

let store = legacy_createStore(reducers);

window.store = store;

export default store;