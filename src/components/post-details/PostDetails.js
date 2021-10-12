import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost, deletePost } from "../../actions/posts";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import { setCurrentId } from '../../actions/data'
import { SET_CURRENT_ID } from '../../constants/actionTypes'

const PostDetails = () => {
    const { posts, post } = useSelector((state) => state.posts);
    const { id } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();
    const { currentId } = useSelector((state) => state.data)
    // console.log(currentId)
    console.log('Post details location ', location)

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    const editPost = () => {
        dispatch(setCurrentId(post._id))
        history.push({
            pathname: '/form',
            imgUrl: location.imgUrl,
            title: location.title,
            redirectPathname: location.redirectPathname
        })
    }


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
                            <button onClick={editPost}>Edit</button>
                            <button onClick={() => {
                                dispatch(deletePost(post._id))
                                history.push({
                                    pathname: location.redirectPathname
                                })
                            }}>Delete</button>
                        </div>
                    </>
                )}
            </Grid>
        </Grid>
    );
};

export default PostDetails;
