import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBuySellPosts } from '../../actions/posts'
import { CircularProgress } from '@material-ui/core'
import Post from './post/Post'

const BuySellPosts = ({ imgUrl, title, redirectPathname }) => {
    const { buySellPosts, posts, isLoading } = useSelector(
        (state) => state.posts
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBuySellPosts());
    }, [posts]);
    return (
        <>
            {isLoading ? (
                <CircularProgress style={{ margin: '20px 0'}}/>
            ) : (
                <>
                    {buySellPosts.map((post) => (
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

export default BuySellPosts
