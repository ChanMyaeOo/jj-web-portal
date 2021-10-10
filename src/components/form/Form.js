import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useLocation } from 'react-router-dom'
import FileBase from 'react-file-base64';
import useStyles from "./styles";

const Form = () => {
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        selectedFile: ''
    })
    const classes = useStyles();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postData)
    }

    return (
        <Grid container className={classes.formWrapper}>
            <Grid item lg={9} md={9}>
                <div className={classes.logoWrapper}>
                    <img src={location.imgUrl} alt="logo" />
                    <span>{location.title}</span>
                </div>

                <form onSubmit={handleSubmit} className={classes.form}>
                    <input type="text" placeholder="title" className={classes.formTitle} value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                    <textarea placeholder="description" className={classes.formDescription} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})}></textarea>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                    <button type="submit" className={classes.btnCompleted}>Completed</button>
                </form>
            </Grid>
        </Grid>
    );
};

export default Form;
