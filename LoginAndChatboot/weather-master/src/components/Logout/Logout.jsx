import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'reactstrap';
// Import Hiiks form Auth0
import { useAuth0 } from '@auth0/auth0-react';


const Logout = () => {
    const { logout } = useAuth0();
    return (
        <Button
            className="btn btn-primary btn-lg btnLogin"
            color='danger'
            onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
    )
}
export default Logout;