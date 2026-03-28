import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import DisplayStatus from './DisplayStatus.js';

function LoginForm () {

    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        if (!username || !password) {
            setMessage("Fields cannot be empty");
            setType("error");
            return;
        }

        if (password.length < 8) {
            setMessage("Password must be at least 8 characters");
            setType("error");
            return;
        }

        let found = false;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].email === password) {
                found = true;
                break;
            }
        }

        if (found) {
            setMessage("Login successful");
            setType("success");
        } else {
            setMessage("Invalid credentials");
            setType("error");
        }

    }

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

    useEffect(() => {
        if (type === "success" && message) {
            const timer = setTimeout(() => {
            navigate("/flavors");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [type, message, navigate]);

    return (
        <div>
            <main className="main-section">
            <div className="content">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username_field">Username </label>
                    <input type="text" id="username_field" name="username" onChange={(e) => setUsername(e.target.value)} required /><br /><br />

                    <label htmlFor="password_field">Password </label>
                    <input type="password" id="password_field" name="password" onChange={(e) => setPassword(e.target.value)} required /><br />

                    <button type="submit">Login</button><br /><br />
    
                    <a href="#!" className="forgot-link">Forgot Password?</a><br /><br />

                    {message && <DisplayStatus type={type} message={message} />}
                </form>
            </div>
            </main>
        </div>
    );
}

export default LoginForm;