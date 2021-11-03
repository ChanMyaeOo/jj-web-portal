import React from "react";
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LogIn from './log-in/LogIn'
import useStyles from './styles'
import AdImg from '../../images/ad.png'
import AdImg2 from '../../images/ad2.jpg'

const RightPreview = () => {
    const classes = useStyles()
    return (
        <Grid item lg={3} md={3} xs={12} className={classes.rightPreview}>
            <LogIn />
            <Link to="/own-posts" className={classes.btn}>See what I wrote</Link>
            <img src={AdImg} alt="" className={classes.adImg}/>
            <img src={AdImg2} alt="" className={classes.adImg}/>
            <ul>
                <li><Link to="/photo-album">Photo Album</Link></li>
                <li><Link to="/notice">Notice</Link></li>
                <li><Link to="/living-location-details">Living/Location</Link></li>
                <li><Link to="/buy-sell">Home Appliances</Link></li>
                <li><Link to="/job-search">Recruitment/Job Search</Link></li>
            </ul>
        </Grid>
    );
};

export default RightPreview;
