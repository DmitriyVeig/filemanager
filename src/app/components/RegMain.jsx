"use client"
import {useState} from "react";


function Check(flag, type) {
    if (flag) document.getElementById(type).style.border = '1px solid #ccc'
    if (!flag) document.getElementById(type).style.border = '1px solid #c30202'
}

function Display(flag, type) {
    if (flag) document.getElementById(type).style.visibility = 'visible'
    if (!flag) document.getElementById(type).style.visibility = 'hidden'
}


export default function RegMain() {
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName.length === 0) {
            setErrorUsername('Логин не может быть пустым')
            Check(0, "username")
            Display(1, "errorUsername")
        }
        else if (/[^a-zA-Z0-9]/.test(userName)) {
            setErrorUsername('Логин может содержать только латинские буквы и цифры')
            Check(0, "username")
            Display(1, "errorUsername")
        }
        else {
            setErrorUsername('');
            Check(1, "username")
            Display(0, "errorUsername")
        }
        if (password.length === 0) {
            setErrorPassword('Пароль не может быть пустым')
            Check(0, "password")
            Display(1, "errorPassword")
        }
        else if (!/\d/.test(password)) {
            setErrorPassword('Пароль должен содержать цифры');
            Check(0, "password")
            Display(1, "errorPassword")
        }
        else if (!/[a-zA-Z]/.test(password)) {
            setErrorPassword('Пароль должен содeржать латинские буквы');
            Check(0, "password")
            Display(1, "errorPassword")
        }
        else if (!/[^a-zA-Z0-9]/.test(password)) {
            setErrorPassword('Пароль должен содержать специальные символы');
            Check(0, "password")
            Display(1, "errorPassword")
        }
        else {
            setErrorPassword('');
            Check(1, "password")
            Display(0, "errorPassword")
        }
        /*
        Здесь мог быть мой RestAPI
         */
        console.log("A")
    };
    return (
        <div className="reg-container">
            <h2>Регистрация</h2>
            <form action="#" method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label form="username" className="usernameReg">Новый логин</label>
                    <input type="text"
                           id="username"
                           name="username"
                           value={userName}
                           className="username"
                           onChange={(e) => setUserName(e.target.value)}/>
                    <p className="errorUsername" id="errorUsername">{errorUsername}</p>
                </div>
                <div className="form-group">
                    <label form="password" className="passwordReg">Новый пароль</label>
                    <input type="password"
                           id="password"
                           name="password"
                           className="t_password"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                    <p className="errorPassword" id="errorPassword">{errorPassword}</p>
                </div>
                <button className="buttonReg" type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}