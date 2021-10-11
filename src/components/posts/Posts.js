import React from "react";
import { useSelector } from "react-redux";
import Post from './post/Post'

const Posts = ({ imgUrl, title }) => {
    const { posts } = useSelector((state) => state.posts);
    
    return (
            <>
                {posts.map((post) => (
                    <Post post={post} key={post._id} imgUrl={imgUrl} title={title} />
                ))}
            </>
    );
};

export default Posts;
