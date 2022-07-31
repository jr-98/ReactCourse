import { InputAdornment } from '@material-ui/core';
import React from 'react';
import IconState from '../IconState';
import NoFound from './NoFound';

export default {
    title: 'No Found',
    component: NoFound
}
export const NoFoundExample = () => <NoFound children={<IconState state='lighning' value='4em' />
} />