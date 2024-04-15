import React, {useState} from "react";
import style from "./LoginPage.module.css"
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
const urlForApi = process.env.REACT_APP_API_URL;
const notify = (message) => toast(message);

const LoginPage = (props) => {
    const navigate = useNavigate();
    const [userValue, setUserValue] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    function authUser(email, password) {
        const url = `http://localhost:5000/auth/login`;
        let data = {
            email: email,
            password: password
        }
        axios.post(url, data)
            .then(response => {
                notify(`Success: ${response.data}`);
                setUserValue(true);
            })
            .catch(error => {
                notify(`Error: ${error}`);
            });
    }

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };
    return (
        <div className={style.body}>
            {userValue ? navigate('/main-page') : null}
            <div className={style.loginCard}>
                <h2>Login</h2>
                <h3>Enter your credentials</h3>
                <form className={style.loginForm}>
                    <input type="text" placeholder="Username" onChange={handleEmailChange}/>
                    <input type="text" placeholder="Password" onChange={handlePasswordChange}/>
                    <a href="#">Forget your password</a>
                    <button type="submit" onClick={() => authUser(emailValue, passwordValue)}>LOGIN</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;