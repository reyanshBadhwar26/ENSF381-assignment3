import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';

function DisplayStatus ({type, message}){

    if (type === "success"){
        return (<div style={{color: "green"}}>{message}</div>);
    } 
    else if (type === "error"){
        return (<div style={{color: "red"}}>{message}</div>);     
    }

}

function LoginForm () {

    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    function retrieveData() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
        })
        .catch((e) => {
        console.log('Failed to fetch data: ' , e.message);
        })

    }

    useEffect (() =>
        {retrieveData();}
    , []);

    return (
        <div>
            <main className="main-section">
            <div className="content">
                <h2>Login</h2>
                <form>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" name="username" required /><br /><br />

                    <label htmlFor="password">Password </label>
                    <input type="password" id="password" name="password" required /><br />

                    <button type="submit">Login</button><br /><br />
    
                    <div>
                        <label htmlFor="forgot_password">Forgot Password?</label><br /><br />
                    </div>
                </form>
            </div>

            </main>
        </div>
    );
}

function LoginPage(){

    return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
}

export default LoginPage;
