import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

const NoFoundPage = () => {
    const history = useHistory()
    const onClickHandle = () => {
        history.push('/main')
    }
    return (

        <div>
            <Typography variant='h2'>Página no enocntrada</Typography>
            <Button onClick={onClickHandle}>Volver a main</Button>
        </div>
    )
}

export default NoFoundPage