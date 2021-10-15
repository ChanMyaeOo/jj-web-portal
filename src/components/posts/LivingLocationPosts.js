import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLivingLocationPosts } from '../../actions/posts'
import { CircularProgress } from '@material-ui/core'
import Post from './post/Post'

const LivingLocationPosts = ({ imgUrl, title, redirectPathname }) => {
    const { livingLocationPosts, posts, isLoading } = useSelector(
        (state) => state.posts
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLivingLocationPosts());
    }, [posts]);
    return (
        <>
            {isLoading ? (
                <CircularProgress style={{ margin: '20px 0'}}/>
            ) : (
                <>
                    {livingLocationPosts.map((post) => (
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

export default LivingLocationPosts
