import React from "react";
import {
    Grid,
    Card,
    ButtonBase,
    CardHeader,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Avatar,
} from "@material-ui/core/";
import { useHistory } from 'react-router-dom'
import useStyles from "./styles";

const PhotoCard = ({ postImgUrl, postTitle, postId, redirectPathname, imgUrl, title }) => {
    const classes = useStyles();
    const history = useHistory();

    const openPost = () => {
         history.push({
            pathname: `/posts/${postId}`,
            imgUrl,
            title,
            redirectPathname
        })
    }
    return (
        <Card onClick={openPost}>
                <CardMedia className={classes.media} image={postImgUrl} />
                <CardContent>
                    <p>{postTitle}</p>
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
