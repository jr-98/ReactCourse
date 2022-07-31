import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import FOG from 'vanta/dist/vanta.fog.min'
import * as THREE from 'three'

const NoFound = ({ children }) => {
    const myGridRef = useRef(null)
    const [vantaNF, setvantaNF] = useState(0)
    useEffect(() => {
        if (!vantaNF) {
            setvantaNF(FOG({
                THREE,
                el: myGridRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0xacacac,
                midtoneColor: 0x8e8483,
                lowlightColor: 0x56565f,
                blurFactor: 0.59,
                speed: 0.90,
                zoom: 2.40
            }))
        }

        return () => {
            if (vantaNF) {
                vantaNF.destroy()
            }
        }
    }, [vantaNF])
    return (
        <Grid container
            ref={myGridRef}
            alignItems='center'
            className='full-scream'
            display='flex'>
            {children}
        </Grid>
    )
}

NoFound.propTypes = {
    children: PropTypes.node
}

export default NoFound