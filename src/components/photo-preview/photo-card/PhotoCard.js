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
import { useHistory } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from "./styles";

const PhotoCard = ({
    postImgUrl,
    postTitle,
    postId,
    redirectPathname,
    imgUrl,
    title,
    showDetails,
    name,
    createdAt
}) => {
    const classes = useStyles();
    const history = useHistory();
    const date = new Date(createdAt)

    const openPost = () => {
        history.push({
            pathname: `/posts/${postId}`,
            imgUrl,
            title,
            redirectPathname,
            pgForPhotoAlbum: true
        });
    };
    return (
        <Card onClick={openPost}  className={classes.photoCard}>
            <CardMedia className={classes.media} image={postImgUrl} />
            <CardContent>
                <p style={{ marginBottom: '10px'}}>{postTitle}</p>
                {showDetails && <p className={classes.creator}><AccountCircleIcon /> {name}</p>}
            </CardContent>

            {showDetails && (
                <CardActions disableSpacing>
                    <div style={{ fontSize: '90%'}}>{
                        date.getDate() +  "-" + date.toLocaleString('default', { month: 'long' }) + "-" + date.getFullYear()
                    }</div>
                </CardActions>
            )}
        </Card>
    );
};

export default PhotoCard;
