import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
} from "reactstrap";
//Import el hook de Auth0
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button className="btn btn-primary btn-lg btnLogin" color='primary' onClick={() => loginWithRedirect()}>Login</Button>
    )
}
export default Login;