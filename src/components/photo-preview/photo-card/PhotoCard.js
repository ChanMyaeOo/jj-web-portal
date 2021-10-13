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
import useStyles from './styles'

const PhotoCard = ({ imgUrl}) => {
    const classes = useStyles()
    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={imgUrl}
                title="Paella dish"
            />
            <CardContent>
                <p>This is a title</p>
                <p>:) Creator</p>
            </CardContent>

            <CardActions disableSpacing>
                <div>289</div>
                <div>2 Likes</div>
                <div>Time</div>
            </CardActions>
        </Card>
    );
};

export default PhotoCard;
