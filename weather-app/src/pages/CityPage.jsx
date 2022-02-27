import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

const CityPage = () => {
    const history = useHistory()
    const onClickHandle = () => {
        history.push('/main')
    }
    return (
        <div>
            <Typography variant='h2'>City Page</Typography>
            <Button onClick={onClickHandle}>Volver al inicio</Button>
        </div>
    )
}

export default CityPage