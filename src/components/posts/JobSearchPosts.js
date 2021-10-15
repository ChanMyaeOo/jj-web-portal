import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getJobSearchPosts } from '../../actions/posts'
import { CircularProgress } from '@material-ui/core'
import Post from './post/Post'

const JobSearchPosts = ({ imgUrl, title, redirectPathname }) => {
    const { jobSearchPosts, posts, isLoading } = useSelector(
        (state) => state.posts
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobSearchPosts());
    }, [posts]);
    return (
        <>
            {isLoading ? (
                <CircularProgress style={{ margin: '20px 0'}}/>
            ) : (
                <>
                    {jobSearchPosts.map((post) => (
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
    )
}

export default JobSearchPosts
