import React, { useEffect } from "react";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LivImg from "../../images/liv-loc.png";
import CaroImg1 from "../../images/car1.jpg";
import CaroImg2 from "../../images/car2.jpg";
import CaroImg3 from "../../images/car3.jpg";
import {
    getPosts,
    getPhotoAlbumPosts,
    getLivingLocationPosts,
    getNoticeLatestPosts,
    getPhotoAlbumLatestPosts,
    getBuySellLatestPosts,
    getJobSearchLatestPosts,
} from "../../actions/posts";
import PhotoCard from "../../components/photo-preview/photo-card/PhotoCard";
import PhotoAlbumImg from "../../images/photo-album.png";

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {
        isLoading,
        livingLocationPosts,
        photoAlbumPosts,
        posts,
        noticeLatestPosts,
        photoAlbumLatestPosts,
        buySellLatestPosts,
        jobSearchLatestPosts,
    } = useSelector((state) => state.posts);
    const history = useHistory();

    console.log("Notice latest posts", noticeLatestPosts);

    useEffect(() => {
        dispatch(getPhotoAlbumPosts());
        dispatch(getNoticeLatestPosts());
        dispatch(getPhotoAlbumLatestPosts());
        dispatch(getBuySellLatestPosts());
        dispatch(getJobSearchLatestPosts());
        dispatch(getLivingLocationPosts());
    }, []);
    console.log("Home page", livingLocationPosts);

    const openPost = (id) => {
        history.push({
            pathname: `/posts/${id}`,
            imgUrl: LivImg,
            title: "Living/Location",
            redirectPathname: "/living-location-details",
        });
    };

    return (
        <Grid container className={classes.home}>
            <Grid item lg={9} md={9}>
                <Carousel
                    className={classes.carousel}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                >
                    <div>
                        <img src={CaroImg1} alt="picture" />
                    </div>
                    <div>
                        <img src={CaroImg2} alt="picture" />
                    </div>
                    <div>
                        <img src={CaroImg3} alt="picture" />
                    </div>
                </Carousel>
                <div className={classes.postsWrapper}>
                    <div className={classes.storyContainer}>
                        <div className={classes.postTitle}>
                            <h5>Latest Posts</h5>
                        </div>
                        {posts.length === 0 ? (
                            <CircularProgress style={{ margin: "20px" }} />
                        ) : (
                            <ul className={classes.postListWrapper}>
                                {posts.map((post) => (
                                    <li
                                        key={post._id}
                                        onClick={() => openPost(post._id)}
                                        className={classes.postList}
                                    >
                                        {post.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className={classes.storyContainer}>
                        <div className={classes.postTitle}>
                            <h5>Notice</h5>
                            <div><Link to="/notice">+</Link></div>
                        </div>
                        {noticeLatestPosts.length === 0 ? (
                            <CircularProgress style={{ margin: "20px" }} />
                        ) : (
                            <ul className={classes.postListWrapper}>
                                {noticeLatestPosts.map((post) => (
                                    <li
                                        key={post._id}
                                        onClick={() => openPost(post._id)}
                                        className={classes.postList}
                                    >
                                        {post.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className={classes.postsWrapper}>
                    <div className={classes.photoAlbumContainer}>
                        <div className={classes.postTitle}>
                            <h5>Photo Album</h5>
                            <div><Link to="/photo-album">+</Link></div>
                        </div>
                        {photoAlbumLatestPosts.length === 0 ? (
                            <CircularProgress style={{ margin: "20px" }} />
                        ) : (
                            <Grid
                                container
                                spacing={3}
                                className={classes.photoContainer}
                            >
                                {photoAlbumLatestPosts.map((post) => (
                                    <Grid item md={4} key={post._id}>
                                        <PhotoCard
                                            postImgUrl={post.selectedFile}
                                            postTitle={post.title}
                                            postId={post._id}
                                            redirectPathname="/photo-album"
                                            imgUrl={PhotoAlbumImg}
                                            title="Photo Album"
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </div>
                </div>

                <div className={classes.postsWrapper}>
                    <div className={classes.storyContainer}>
                        <div className={classes.postTitle}>
                            <h5>Buy and Sell</h5>
                            <div><Link to="buy-sell">+</Link></div>
                        </div>
                        {buySellLatestPosts.length === 0 ? (
                            <CircularProgress style={{ margin: "20px" }} />
                        ) : (
                            <ul className={classes.postListWrapper}>
                                {buySellLatestPosts.map((post) => (
                                    <li
                                        key={post._id}
                                        onClick={() => openPost(post._id)}
                                        className={classes.postList}
                                    >
                                        {post.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className={classes.storyContainer}>
                        <div className={classes.postTitle}>
                            <h5>Job Search</h5>
                            <div><Link to="/job-search">+</Link></div>
                        </div>
                        {jobSearchLatestPosts.length === 0 ? (
                            <CircularProgress style={{ margin: "20px" }} />
                        ) : (
                            <ul className={classes.postListWrapper}>
                                {jobSearchLatestPosts.map((post) => (
                                    <li
                                        key={post._id}
                                        onClick={() => openPost(post._id)}
                                        className={classes.postList}
                                    >
                                        {post.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default Home;
