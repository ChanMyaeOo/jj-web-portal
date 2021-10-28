import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost, deletePost } from "../../actions/posts";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";
import { setCurrentId } from "../../actions/data";
import { SET_CURRENT_ID } from "../../constants/actionTypes";
import Preview from "../../components/preview/Preview";
import PhotoPreview from "../../components/photo-preview/PhotoPreview";
import NoticeImg from "../../images/notice.png";
import HomeAppliancesImg from "../../images/buy-sell.png";
import JobSearchImg from "../../images/job-search.png";
import LivingLocationImg from "../../images/liv-loc.png";
import PhotoAlbumImg from "../../images/photo-album.png";

const PostDetails = () => {
    const { posts, post, isLoading } = useSelector((state) => state.posts);
    const { id } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();
    const { currentId } = useSelector((state) => state.data);
    const user = JSON.parse(localStorage.getItem("profile"));
    // console.log(currentId)
    console.log("Post Details Post Test", post);

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    const editPost = () => {
        dispatch(setCurrentId(post._id));
        history.push({
            pathname: "/form",
            imgUrl: location.imgUrl,
            title: location.title,
            redirectPathname: location.redirectPathname,
        });
    };

    return (
        <>
            <Grid container className={classes.postDetails}>
                <Grid item lg={9} md={9}>
                    <div className={classes.logoWrapper}>
                        <img src={location.imgUrl} alt="logo" />
                        <span>{location.title}</span>
                    </div>
                    {isLoading ? (
                        <CircularProgress style={{ margin: "20px" }} />
                    ) : (
                        <>
                            {post && (
                                <>
                                    <h3 className={classes.postDetailsTitle}>
                                        {post.title}
                                    </h3>
                                    {post.selectedFile && (
                                        <img
                                            src={post.selectedFile}
                                            alt="picture"
                                            className={classes.postDetailsImg}
                                        />
                                    )}
                                    <p className={classes.postDetailsMessage}>
                                        {post.message}
                                    </p>
                                    {user?.result?._id === post?.creator && (
                                        <div className={classes.btnWrapper}>
                                            <button
                                                onClick={editPost}
                                                className={classes.editBtn}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className={classes.deleteBtn}
                                                onClick={() => {
                                                    dispatch(
                                                        deletePost(post._id)
                                                    );
                                                    history.push({
                                                        pathname:
                                                            location.redirectPathname,
                                                    });
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </Grid>
            </Grid>
            {post && post.tag === "Notice" && (
                <Preview
                    imgUrl={NoticeImg}
                    title="Notice"
                    showNotice={true}
                    hideLogo={false}
                    pgForNotice={location.pgForNotice}
                />
            )}

            {post && post.tag === "Home Appliances" && (
                <Preview
                    imgUrl={HomeAppliancesImg}
                    title="Home Appliances"
                    showBuyAndSell={true}
                    hideLogo={false}
                    pgForHomeAppliances={location.pgForHomeAppliances}
                />
            )}

            {post && post.tag === "Recruitment/Job Search" && (
                <Preview
                    imgUrl={JobSearchImg}
                    title="Recruitment/Job Search"
                    showJobSearch={true}
                    hideLogo={false}
                />
            )}

            {post && post.tag === "Living/Location" && (
                <Preview
                    imgUrl={LivingLocationImg}
                    title="Living/Location"
                    showLivingLocation={true}
                    hideLogo={false}
                />
            )}

            {post && post.tag === "Photo Album" && (
                <PhotoPreview
                    imgUrl={PhotoAlbumImg}
                    title="Photo Album"
                    hideLogo={false}
                />
            )}
        </>
    );
};

export default PostDetails;
