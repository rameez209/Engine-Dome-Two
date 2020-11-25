import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core"
import Aos from "aos";
import "aos/dist/aos.css"


export function UseForm(initialFValues) {

    const [values, setValues] = useState(initialFValues)

     // To assign values input text fields
     const handleInputChange= e => {
        const {name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }    
    
    return {
        values, 
        setValues,
        handleInputChange
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,  
        }
    }
}));


export function Form(props) {

     // to animate with scroll 
     useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    const classes = useStyles();
    
    return (
        <form className={classes.root} autoComplete="off" data-aos="fade-right">
            {props.children}
        </form>
    )
}
