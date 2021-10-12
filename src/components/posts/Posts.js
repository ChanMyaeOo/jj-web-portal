import React from "react";
import { useSelector } from "react-redux";
import Post from './post/Post'

const Posts = ({ imgUrl, title, redirectPathname }) => {
    const { posts } = useSelector((state) => state.posts);
    console.log('Posts location', redirectPathname)
    return (
            <>
                {posts.map((post) => (
                    <Post post={post} key={post._id} imgUrl={imgUrl} title={title} redirectPathname={redirectPathname} />
                ))}
            </>
    );
};

export default Posts;
