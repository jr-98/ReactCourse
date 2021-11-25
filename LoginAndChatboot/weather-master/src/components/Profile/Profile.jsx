import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import './Profile.css';
import { useHistory } from 'react-router';


const Profile = () => {
    const history = useHistory();

    const { user, isAuthenticated, isLoading } = useAuth0();
    const onClickHandlerHome = () => {
        history.push('/')
    }
    if (isLoading) {
        return <div>Loafing.....</div>;
    }

    return (
        isAuthenticated && (
            <Grid container
                direction="column"
                justify="center"
                alignItems="center">
                <Grid item
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <section className='card '>
                        <img
                            className='imsSize '
                            src={user.picture}
                            alt={user.name}></img>
                    </section>
                    <section className='align-self-center'>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </section>
                </Grid>
                <Grid>
                    <Button size="large"
                        style={{
                            borderRadius: 35,
                            backgroundColor: "#21b6ae",
                            padding: "18px 36px",
                            fontSize: "18px"
                        }}
                        variant="contained"
                        onClick={onClickHandlerHome}>Home</Button>
                </Grid>
            </Grid>
        )
    );
}

//Export component
export default Profile;