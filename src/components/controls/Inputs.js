import React from 'react'
import { TextField } from '@material-ui/core';

export default function Inputs(props) {

    const {name, label, value, onChange} = props;
    
    return (
        <TextField 
            variant="standard"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}
