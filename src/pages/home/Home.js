import React, { useEffect } from "react";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getLivingLocationPosts } from "../../actions/posts";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LivImg from "../../images/liv-loc.png";
import CaroImg1 from '../../images/car1.jpg'
import CaroImg2 from '../../images/car2.jpg'
import CaroImg3 from '../../images/car3.jpg'

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { livingLocationPosts } = useSelector((state) => state.posts);
    const history = useHistory();

    useEffect(() => {
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
                <Carousel className={classes.carousel} showThumbs={false} showIndicators={false} showStatus={false}>
                    <div>
                        <img src={CaroImg1} alt="picture"/>
                    </div>
                    <div>
                        <img src={CaroImg2} alt="picture"/>
                    </div>
                    <div>
                        <img src={CaroImg3} alt="picture"/>
                    </div>
                </Carousel>
                <div className={classes.postsWrapper}>
                    <div>
                        <h5>Latest Posts</h5>
                        {livingLocationPosts.map((post) => (
                            <div
                                key={post._id}
                                onClick={() => openPost(post._id)}
                            >
                                {post.title}
                            </div>
                        ))}
                    </div>
                    <div>Notice</div>
                </div>
            </Grid>
        </Grid>
    );
};

export default Home;
