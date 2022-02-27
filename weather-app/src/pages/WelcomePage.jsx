import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

const WelcomePage = () => {
    const history = useHistory()
    const onClickHandle = () => {
        history.push('/main')
    }
    return (
        <div><Typography variant='h2'>Welcome Page</Typography>
            <Button onClick={onClickHandle}>Ir a main</Button>
        </div>
    )
}

export default WelcomePage