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
import useStyles from "./styles";

const PhotoCard = ({
    postImgUrl,
    postTitle,
    postId,
    redirectPathname,
    imgUrl,
    title,
    showDetails,
}) => {
    const classes = useStyles();
    const history = useHistory();

    const openPost = () => {
        history.push({
            pathname: `/posts/${postId}`,
            imgUrl,
            title,
            redirectPathname,
        });
    };
    return (
        <Card onClick={openPost} style={{ margin: '10px'}}>
            <CardMedia className={classes.media} image={postImgUrl} />
            <CardContent>
                <p>{postTitle}</p>
                {showDetails && <p>:) Creator</p>}
            </CardContent>

            {showDetails && (
                <CardActions disableSpacing>
                    <div>3</div>
                    <div>2 Likes</div>
                </CardActions>
            )}
        </Card>
    );
};

export default PhotoCard;
