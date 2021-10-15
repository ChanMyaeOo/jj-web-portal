import React, { useEffect } from "react";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getLivingLocationPosts } from "../../actions/posts";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LivImg from "../../images/liv-loc.png";
import CaroImg1 from "../../images/car1.jpg";
import CaroImg2 from "../../images/car2.jpg";
import CaroImg3 from "../../images/car3.jpg";
import { getPhotoAlbumPosts } from '../../actions/posts';
import PhotoCard from '../../components/photo-preview/photo-card/PhotoCard'
import PhotoAlbumImg from '../../images/photo-album.png'

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { livingLocationPosts, photoAlbumPosts } = useSelector((state) => state.posts);
    const history = useHistory();

    useEffect(() => {
        dispatch(getLivingLocationPosts());
        dispatch(getPhotoAlbumPosts())
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
                            <h5>Story</h5>
                            <div>+</div>
                        </div>
                        <ul className={classes.postListWrapper}>
                            {livingLocationPosts.map((post) => (
                                <li
                                    key={post._id}
                                    onClick={() => openPost(post._id)}
                                    className={classes.postList}
                                >
                                    {post.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={classes.storyContainer}>
                        <div className={classes.postTitle}>
                            <h5>Notice</h5>
                            <div>+</div>
                        </div>
                        <ul className={classes.postListWrapper}>
                            {livingLocationPosts.map((post) => (
                                <li
                                    key={post._id}
                                    onClick={() => openPost(post._id)}
                                    className={classes.postList}
                                >
                                    {post.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={classes.postsWrapper}>
                    <div className={classes.photoAlbumContainer}>
                        <div className={classes.postTitle}>
                            <h5>Photo Album</h5>
                            <div>+</div>
                        </div>

                        <Grid
                            container
                            spacing={3}
                            className={classes.photoContainer}
                        >
                            {photoAlbumPosts.map((post) => (
                                <Grid item md={3} key={post._id}>
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
                    </div>
                </div>

                <div className={classes.postsWrapper}>
                    <div className={classes.storyContainer}>
                        <div className={classes.postTitle}>
                            <h5>Buy and Sell</h5>
                            <div>+</div>
                        </div>
                        <ul className={classes.postListWrapper}>
                            {livingLocationPosts.map((post) => (
                                <li
                                    key={post._id}
                                    onClick={() => openPost(post._id)}
                                    className={classes.postList}
                                >
                                    {post.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={classes.storyContainer}>
                        <div className={classes.postTitle}>
                            <h5>Job Search</h5>
                            <div>+</div>
                        </div>
                        <ul className={classes.postListWrapper}>
                            {livingLocationPosts.map((post) => (
                                <li
                                    key={post._id}
                                    onClick={() => openPost(post._id)}
                                    className={classes.postList}
                                >
                                    {post.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default Home;
