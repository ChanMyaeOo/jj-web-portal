import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../actions/posts";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";

const PostDetails = () => {
    const { posts, post } = useSelector((state) => state.posts);
    const { id } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    return (
        <Grid container className={classes.postDetails}>
            <Grid item lg={9} md={9}>
                <div className={classes.logoWrapper}>
                    <img src={location.imgUrl} alt="logo" />
                    <span>{location.title}</span>
                </div>
                {post && (
                    <>
                        <h3>{post.title}</h3>
                        <p>{post.message}</p>
                        <div className={classes.btnWrapper}>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </>
                )}
            </Grid>
        </Grid>
    );
};

export default PostDetails;
