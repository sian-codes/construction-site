import React, { useContext } from 'react';

import Input from '../../components/form/Input';
import Card from '../../components/card/Card'
import {useForm} from "../../hooks/LoginFormHook";
import {AuthContext} from '../components/context/auth-context';
import './LoginAuth.css';

const LoginAuth = () => {
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
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                <Input
                    element="input"
                    id="email"
                    type="email"
                    label="E-Mail"
                    errorText="Please enter a valid email address."
                    onInput={inputHandler}
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

export default LoginAuth;