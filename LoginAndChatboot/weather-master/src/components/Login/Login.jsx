import React from 'react'
import { Button, Box } from '@material-ui/core';
//Import el hook de Auth0
import { useAuth0 } from '@auth0/auth0-react';

import './Login.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Box
            component="span"
            m={1} //margin
            className='box topLeftBox'
        >
            <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={() => loginWithRedirect()}>
                Login
            </Button>
        </Box>
    )
}
export default Login;