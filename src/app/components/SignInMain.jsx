"use client"
import {useState} from "react";
import Link from "next/link";


function getData() {
    const res = fetch('https://localhost:3000')
    if (!res.ok) {
        throw new Error('Провал получения данных')
    }
    return res.json()
}



export default function SignInMain() {
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        Здесь мог быть мой RestAPI
         */
        console.log("A")
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
                <button type="submit" onClick={(event) => {}}>Войти</button>
                <Link href="../reg"><button>Зарегистрироваться</button></Link>
            </form>
        </div>
    );
}