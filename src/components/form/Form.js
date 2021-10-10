import React from "react";
import { Grid } from "@material-ui/core";
import { useLocation } from 'react-router-dom'
import useStyles from "./styles";

const Form = () => {
    const classes = useStyles();
    const location = useLocation();
    console.log(location)
    return (
        <Grid container className={classes.formWrapper}>
            <Grid item lg={9} md={9}>
                <div className={classes.logoWrapper}>
                    <img src={location.imgUrl} alt="logo" />
                    <span>{location.title}</span>
                </div>
            </Grid>
        </Grid>
    );
};

export default Form;
