import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNoticePosts } from "../../actions/posts";
import Post from "./post/Post";
import { CircularProgress } from '@material-ui/core'

const NoticePosts = ({ imgUrl, title, redirectPathname }) => {
    const { noticePosts, posts, isLoading } = useSelector(
        (state) => state.posts
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNoticePosts());
    }, [posts]);
    // console.log("Notice Posts test", noticePosts)
    return (
        <>
            {isLoading ? (
                <CircularProgress style={{ margin: '20px 0'}}/>
            ) : (
                <>
                    {noticePosts?.map((post) => (
                        <Post
                            post={post}
                            key={post._id}
                            imgUrl={imgUrl}
                            title={title}
                            redirectPathname={redirectPathname}
                        />
                    ))}
                </>
            )}
        </>
    );
};

export default NoticePosts;
