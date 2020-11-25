import React from 'react'
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';

export default function RadioGroups(props) {

    const {name, label, value, onChange, items} = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <RadioGroup row
                name={name}
                value={value}
                onChange={onChange}
            >
                {
                    items.map(item => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                        )
                    )
                }
                
            </RadioGroup>
        </FormControl>
    )
}
