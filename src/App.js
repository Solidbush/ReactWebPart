import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import LoginPage from "./components/LoginPage/LoginPage";
import {Toaster} from "react-hot-toast";
import {useConnectSocket} from "./hooks/useConnectSocket";
import React from "react";
import AllCoursesPage from "./components/AllCoursesPage/AllCoursesPage";
import MainPage from "./components/MainPage/MainPage";
import CommentsPage from "./components/CommentsPage/CommentsPage";

function App(props) {
    useConnectSocket()
    const {pathname} = useLocation();
    return (
            <div className={(pathname !== "/login-page" && pathname !=="/register-page") ? "app-wrapper" : "app-wrapper-height"}>
                {(pathname !== "/login-page" && pathname !=="/register-page") && <NavBar />}
                <Routes>
                    <Route path={"/main-page/*"} element={<MainPage/>}></Route>
                    <Route path={"/all-courses/*"} element={<AllCoursesPage />}></Route>
                    <Route path={"/comments-page/*"} element={<CommentsPage />}></Route>
                    <Route path={"/login-page/*"} element={<LoginPage/>}></Route>
                    <Route path={"/register-page/*"} element={<LoginPage/>}></Route>
                </Routes>
                {(pathname !== "/login-page" && pathname !== "/register-page") && <SocialLinks />}
                <Toaster
                    position="bottom-right"
                    reverseOrder={false}
                />
            </div>
    );
}

export default App;
