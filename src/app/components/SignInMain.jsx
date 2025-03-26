"use client"
import {useState} from "react";
import Link from "next/link";
import path_env from "path";
require('dotenv').config({ path: path_env.resolve(__dirname, '../../../.env.local') }); // Абсолютный путь


async function getData() {
    const res = await fetch('http://localhost:3001/users')
    return res.json()
}


export default function SignInMain() {
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [submitted, submit] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (submitted) {
            const data = await getData();
            console.log(userName + " " + password)
            for (const person of data) {
                if (person.username === userName && person.password === password) {
                    if (person.logged) {
                        console.log("1")
                    }
                    else {
                        console.log("0")
                    }
                }
            }
            submit(0)
        }
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
                <button type="submit" onClick={(event) => {submit(1)}}>Войти</button>
                <Link href="../reg"><button>Зарегистрироваться</button></Link>
            </form>
        </div>
    );
}