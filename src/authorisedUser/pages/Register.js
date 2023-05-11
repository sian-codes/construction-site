import React, {useState} from 'react';
import Card from '../../components/card/Card'
import '../pages/login/login.css';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev) {
        ev.preventDefault();
       const response = await fetch('http://localhost:4000/blog/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'}
        });
       if (response.status === 200) {
           alert('Registration Complete')
       }
       else {
           alert('Registration failed')
       }
    }

    return (
        <Card className="authentication">
            <h2>Register</h2>
            <hr />
            <form onSubmit={register}>
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
                <button>Register</button>
            </form>
        </Card>
    );
};

export default Register;
