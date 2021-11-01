import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import { getOwnPosts } from '../../actions/posts'
import Post from './post/Post'
import LivLocImg from '../../images/liv-loc.png'
import HomeAppliancesImg from '../../images/buy-sell.png'
import PhotoAlbumImg from '../../images/photo-album.png'
import NoticeImg from '../../images/notice.png'
import JobSearchImg from '../../images/job-search.png'

const OwnPostsData = () => {
    const { ownPosts, posts, isLoading } = useSelector(
        (state) => state.posts
    );
    const dispatch = useDispatch();
    let imgUrl, title, redirectPathname;
    if(ownPosts) {
        ownPosts.forEach((element, index, array) => {
            if(element.tag === 'Living/Location') {
                imgUrl = LivLocImg
                title = "Living/Location"
                redirectPathname = '/living-location-details'
            } else if(element.tag === "Home Appliances") {
                imgUrl = HomeAppliancesImg
                title = "Home Appliances"
                redirectPathname = "/buy-sell"
            } else if(element.tag === "Photo Album") {
                imgUrl = PhotoAlbumImg
                title = "Photo Album"
                redirectPathname = '/photo-album'
            } else if(element.tag === "Notice") {
                imgUrl = NoticeImg
                title = "Notice"
                redirectPathname = "/notice"
            } else if(element.tag === "Recruitment/Job Search") {
                imgUrl = JobSearchImg
                title = "Recruitment/Job Search"
                redirectPathname = "/job-search"
            }
        })
    }

    return (
         <>
            {isLoading ? (
                <CircularProgress style={{ margin: '20px 0'}}/>
            ) : (
                <>
                    {ownPosts?.map((post) => (
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

export default OwnPostsData
