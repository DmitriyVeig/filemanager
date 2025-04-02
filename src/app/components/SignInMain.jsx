"use client"
import {use, useContext, useState} from "react";
import Link from "next/link";
import path_env from "path";
require('dotenv').config({ path: path_env.resolve(__dirname, '../../../.env.local') }); // Абсолютный путь


async function getData(ask) {
    const data = await fetch('http://localhost:3001' + ask);
    return data.json();
}


export default function SignInMain() {
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
    const [submitted, submit] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (submitted) {
            const usersJSON = await getData('/users');
            let exists = false;
            for (const user of usersJSON.users) {
                if (user.username === userName && user.password === password) {
                    exists = true;
                }
            }
            if (exists) {
                setError( '')
            }
            else {
                setError('Ошибка в логине или пароле')
            }
            submit(0)
        }
    };

    return (
        <div className="login-container">
            <h2>Вход</h2>
            <form action="#" method="post" onSubmit={handleSubmit}>
                <p>{error}</p>
                <div className="form-group">
                    <label form="username" className="username">Логин</label>
                    <input type="text"
                           id="username"
                           name="username"
                           value={userName}
                           onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label form="password" className="password">Пароль</label>
                    <input type="password"
                           id="password"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <button type="submit" onClick={(event) => {submit(1)}}>Войти</button>
                <Link href="../reg"><button>Зарегистрироваться</button></Link>
            </form>
        </div>
    );
}