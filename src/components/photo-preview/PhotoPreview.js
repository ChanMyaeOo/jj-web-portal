import React, { useEffect } from "react";
import {
    Grid,
    CircularProgress,
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
import Paper from "@material-ui/core/Paper";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";
import Photo1 from "../../images/test-pt1.jpg";
import Photo2 from "../../images/test-pt2.jpg";
import Photo3 from "../../images/test-pt3.jpeg";
import Photo4 from "../../images/test-pt4.jpg";
import PhotoCard from "./photo-card/PhotoCard";
import { getPhotoAlbumPosts, getPhotoAlbumTotal } from "../../actions/posts";
import Paginate from '../pagination/Paginate'
import RightPreview from "../right-preview/RightPreview";

const PhotoPreview = ({ imgUrl, title, hideLogo = true, pgForPhotoAlbum, page, showWriting }) => {
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    const { posts, photoAlbumPosts, isLoading, photoAlbumTotal } = useSelector(
        (state) => state.posts
    );

    useEffect(() => {
        dispatch(getPhotoAlbumPosts());
        dispatch(getPhotoAlbumTotal());
    }, [posts]);

    console.log("Photo Album Posts Testing 111", photoAlbumPosts.length);
    return (
        <Grid container className={classes.detailsWrapper}>
            <Grid item lg={9} md={9}>
                {hideLogo ? (
                    <div className={classes.logoWrapper}>
                        <img src={imgUrl} alt="logo" />
                        <span>{title}</span>
                    </div>
                ) : null}

                <div className={classes.detailsHeader}>
                    <p>Total {photoAlbumTotal} posts </p>

                    {user?.result && showWriting && (
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
                    )}
                </div>

                {isLoading ? (
                    <CircularProgress style={{ marginTop: "20px" }} />
                ) : (
                    <Grid
                        container
                        spacing={3}
                        className={classes.photoContainer}
                    >
                        {photoAlbumPosts?.map((post) => (
                            <Grid item md={4} key={post._id}>
                                <PhotoCard
                                    showDetails={true}
                                    postImgUrl={post.selectedFile}
                                    postTitle={post.title}
                                    postId={post._id}
                                    redirectPathname={location.pathname}
                                    imgUrl={imgUrl}
                                    title={title}
                                    name={post.name}
                                    createdAt={post.createdAt}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}

                <Paper elevation={6}>
                    <Paginate
                        pgForPhotoAlbum={pgForPhotoAlbum}
                        page={page}
                    />
                </Paper>
            </Grid>
            <RightPreview />
        </Grid>
    );
};

export default PhotoPreview;
