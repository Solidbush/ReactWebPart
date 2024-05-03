import React, {useState} from "react";
import style from "./LoginPage.module.css"
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useUser} from "../../store";
import {Vortex} from "react-loader-spinner";
import toast from "react-hot-toast";
const notify = (message) => toast.success(message);
const LoginPage = () => {
    const location = useLocation();
    const isLogin = location.pathname === "/login-page";
    const navigate = useNavigate();
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const {userToken, userEmail, loading, login, register} = useUser((state) => ({
        userToken: state.userToken,
        userEmail: state.userEmail,
        loading: state.loading,
        login: state.login,
        register: state.register
    }))
    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };

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

    if (userToken) {
        notify(`Привет ${userEmail}`)
        navigate("/main-page")
    }

    return (
        <div className={style.body}>
            <div className={style.loginCard}>
                <h2>{isLogin ? "Login" : "Register"}</h2>
                <h3>Enter your credentials</h3>
                <form className={style.loginForm}>
                    <input type="text" placeholder="Username" onChange={handleEmailChange}/>
                    <input type="password" placeholder="Password" onChange={handlePasswordChange}/>
                    <a href="#">Forget your password</a>
                    {isLogin
                        ?
                        <NavLink to={"/register-page"}>Нет аккаунта?</NavLink>
                        :
                        <NavLink to={"/login-page"}>Есть аккаунт?</NavLink>
                    }
                    <button type="submit" onClick={() => isLogin ? login(emailValue, passwordValue) : register(emailValue, passwordValue)}>{isLogin ? "Login" : "Register"}</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;