import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import AllCoursesContainer from "./components/AllCoursesPage/AllCoursesContainer";

function App(props) {
    const {pathname} = useLocation();
    return (
            <div className={pathname !== "/login-page" ? "app-wrapper" : "app-wrapper-height"}>
                {pathname !== "/login-page" && <NavBar />}
                <Routes>
                    <Route path={"/main-page/*"} element={<MainPageContainer/>}></Route>
                    <Route path={"/all-courses/*"} element={<AllCoursesContainer />}></Route>
                    <Route path={"/login-page/*"} element={<LoginPage/>}></Route>
                </Routes>
                {pathname !== "/login-page" && <SocialLinks />}
            </div>
    );
}

export default App;
