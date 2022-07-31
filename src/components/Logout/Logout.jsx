import React from 'react'
import { Button, Box } from '@material-ui/core';
// Import Hiiks form Auth0
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
    const { logout } = useAuth0();
    return (
        <Box component="span"
            m={1} //margin
            className='box topLeftBox'>
            <Button
                size="large"
                variant="contained"
                color="secondary"
                onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
            </Button>
        </Box>

    )
}
export default Logout;