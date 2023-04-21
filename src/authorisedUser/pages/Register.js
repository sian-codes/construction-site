import React, {useContext, useState} from 'react';

import Input from '../../components/form/Input';
import Card from '../../components/card/Card'
import {useForm} from "../../hooks/LoginFormHook";
import {AuthContext} from '../components/context/auth-context';
import './LoginAuth.css';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function register(ev) {
        ev.preventDefault();
        fetch('http://localhost:4000/blog', {
            method: 'POST',
            body: JSON.stringify({username, password})
        })
    }

    const auth = useContext(AuthContext);

    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
        auth.login();
    };

    return (
        <Card className="authentication">
            <h2>Register Here</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                <Input
                    element="input"
                    id={username}
                    label="Username"
                />
                <Input
                    element="input"
                    id="password"
                    type="password"
                    label="Password"
                    errorText="Please enter a valid password, at least 5 characters."
                    onInput={inputHandler}
                />
            </form>
        </Card>
    );
};

export default Register;
