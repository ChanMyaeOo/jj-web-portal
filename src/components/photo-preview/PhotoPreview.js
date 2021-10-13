import React from "react";
import {
    Grid,
    Card,
    CardHeader,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    ButtonBase,
    Avatar,
} from "@material-ui/core/";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";
import Photo1 from "../../images/test-pt1.jpg";
import Photo2 from "../../images/test-pt2.jpg";
import Photo3 from "../../images/test-pt3.jpeg";
import Photo4 from "../../images/test-pt4.jpg";
import PhotoCard from './photo-card/PhotoCard'

const PhotoPreview = ({ imgUrl, title }) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <Grid container className={classes.detailsWrapper}>
            <Grid item lg={9} md={9}>
                <div className={classes.logoWrapper}>
                    <img src={imgUrl} alt="logo" />
                    <span>{title}</span>
                </div>
                <div className={classes.detailsHeader}>
                    <p>Total 200 posts </p>

                    <Link
                        to={{
                            pathname: "/form",
                            imgUrl,
                            title,
                            redirectPathname: location.pathname,
                        }}
                    >
                        writing
                    </Link>
                </div>

                <Grid container spacing={3} className={classes.photoContainer}>
                    <Grid item md={4}>
                        <PhotoCard imgUrl={Photo1}/>
                    </Grid>

                     <Grid item md={4}>
                        <PhotoCard imgUrl={Photo2}/>
                    </Grid>

                     <Grid item md={4}>
                        <PhotoCard imgUrl={Photo3}/>
                    </Grid>

                     <Grid item md={4}>
                        <PhotoCard imgUrl={Photo4}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={3} md={3}>
                Right Side
            </Grid>
        </Grid>
    );
};

export default PhotoPreview;
