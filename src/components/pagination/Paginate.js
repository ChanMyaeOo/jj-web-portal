import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { getNoticePosts, getBuySellPosts, getPhotoAlbumPosts, getJobSearchPosts, getLivingLocationPosts, getOwnPosts } from "../../actions/posts";

const Paginate = ({ page, pgForNotice, pgForHomeAppliances, pgForOwnPosts, pgForPhotoAlbum, pgForRecruitment, pgForLiving }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { numberOfPages } = useSelector((state) => state.posts);
    const user = JSON.parse(localStorage.getItem('profile'))
    // console.log('Pagination User ', user.result._id)

    useEffect(() => {
        if (page && pgForNotice) {
            dispatch(getNoticePosts(page));
        } else if(page && pgForHomeAppliances) {
            dispatch(getBuySellPosts(page))
        } else if(page && pgForPhotoAlbum) {
            dispatch(getPhotoAlbumPosts(page))
        } else if(page && pgForRecruitment) {
            dispatch(getJobSearchPosts(page))
        } else if(page && pgForLiving) {
            dispatch(getLivingLocationPosts(page))
        } else if(page && pgForOwnPosts) {
            dispatch(getOwnPosts(page, user?.result?._id))
        }
    }, [dispatch, page]);
    return (
        <>
            {pgForNotice && (
                <Pagination
                    classes={{ ul: classes.ul }}
                    count={numberOfPages}
                    page={Number(page) || 1}
                    variant="outlined"
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            component={Link}
                            // to={`/posts?page=${item.page}`}
                            to={`/notice?page=${item.page}`}
                        />
                    )}
                />
            )}

            {pgForHomeAppliances && (
                <Pagination
                    classes={{ ul: classes.ul }}
                    count={numberOfPages}
                    page={Number(page) || 1}
                    variant="outlined"
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            component={Link}
                            // to={`/posts?page=${item.page}`}
                            to={`/buy-sell?page=${item.page}`}
                        />
                    )}
                />
            )}

            {pgForPhotoAlbum && (
                <Pagination
                    classes={{ ul: classes.ul }}
                    count={numberOfPages}
                    page={Number(page) || 1}
                    variant="outlined"
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            component={Link}
                            // to={`/posts?page=${item.page}`}
                            to={`/photo-album?page=${item.page}`}
                        />
                    )}
                />
            )}

            {pgForRecruitment && (
                <Pagination
                    classes={{ ul: classes.ul }}
                    count={numberOfPages}
                    page={Number(page) || 1}
                    variant="outlined"
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            component={Link}
                            // to={`/posts?page=${item.page}`}
                            to={`/job-search?page=${item.page}`}
                        />
                    )}
                />
            )}

            {pgForLiving && (
                <Pagination
                    classes={{ ul: classes.ul }}
                    count={numberOfPages}
                    page={Number(page) || 1}
                    variant="outlined"
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            component={Link}
                            // to={`/posts?page=${item.page}`}
                            to={`/living-location-details?page=${item.page}`}
                        />
                    )}
                />
            )}

            {pgForOwnPosts && (
                <Pagination
                    classes={{ ul: classes.ul }}
                    count={numberOfPages}
                    page={Number(page) || 1}
                    variant="outlined"
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            component={Link}
                            // to={`/posts?page=${item.page}`}
                            to={`/own-posts?page=${item.page}`}
                        />
                    )}
                />
            )}
        </>
    );
};

export default Paginate;
