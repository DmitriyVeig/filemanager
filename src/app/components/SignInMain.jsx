"use client"
import {useState} from "react";

export default function SignInMain() {
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (/[^a-zA-Z0-9]/.test(userName))
            setErrorUsername('Логин может содержать только латинские буквы и цифры')
        else
            setErrorUsername('');
        if (!/\d/.test(password))
            setErrorPassword('Пароль должен содержать цифры');
        else if (!/[a-zA-Z]/.test(password))
            setErrorPassword('Пароль должен содeржать латинские буквы');
        else if (!/[^a-zA-Z0-9]/.test(password))
            setErrorPassword('Пароль должен содержать специальные символы');
        else
            setErrorPassword('');
    };
    return (
        <div className="login-container">
            <h2>Вход</h2>
            <form action="#" method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label form="username" className="username">Логин</label>
                    <input type="text"
                           id="username"
                           name="username"
                           value={userName}
                           onChange={(e) => setUserName(e.target.value)}/>
                    {errorUsername && <p className="errorUsername">{errorUsername}</p>}
                </div>
                <div className="form-group">
                    <label form="password" className="password">Пароль</label>
                    <input type="password"
                           id="password"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                    {errorPassword && <p className="errorPassword">{errorPassword}</p>}
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}