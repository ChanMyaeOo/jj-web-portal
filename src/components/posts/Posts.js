import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from '../../actions/posts'
import Post from './post/Post'

const Posts = ({ imgUrl, title, redirectPathname }) => {
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    console.log('Posts List', posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [posts])
    return (
            <>
                {posts.map((post) => (
                    <Post post={post} key={post._id} imgUrl={imgUrl} title={title} redirectPathname={redirectPathname} />
                ))}
            </>
    );
};

export default Posts;
