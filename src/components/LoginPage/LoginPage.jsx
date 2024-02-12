import React from "react";
import style from "./LoginPage.module.css"

const LoginPage = (props) => {
    return (
        <div className={style.body}>
            <div className={style.loginCard}>
                <h2>Login</h2>
                <h3>Enter your credentials</h3>
                <form className={style.loginForm}>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <a href="#">Forget your password</a>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;