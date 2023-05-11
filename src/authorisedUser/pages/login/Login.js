import Card from '../../../components/card/Card'
import '../login/login.css';
import {useState} from "react";
import {Navigate} from "react-router";

// When you press Login on FE with valid credentials you are taken to the create-post screen
// If credentials invalid an alert will advise the user

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/blog/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        if (response.ok) {
                setRedirect(true);
            }
        else {
            alert('Wrong Credentials');
        }
    }

    if (redirect) {
        return <Navigate to={'/blog/create-post'}/>
    }

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <form className="login" onSubmit={login}>
                <input type="text"
                       placeholder="username"
                       value={username}
                       onChange={ev => setUsername(ev.target.value)}
                />
                <input type="password"
                       placeholder="password"
                       value={password}
                       onChange={ev => setPassword(ev.target.value)}
                />
                <button>Login</button>
            </form>
        </Card>
    );
};

export default Login;
