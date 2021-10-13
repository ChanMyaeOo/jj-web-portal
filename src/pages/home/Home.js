import React, { useEffect } from 'react'
import useStyles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { getLivingLocationPosts } from '../../actions/posts'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import LivImg from '../../images/liv-loc.png'

const Home = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { livingLocationPosts } = useSelector(state => state.posts)
    const history = useHistory()

    useEffect(() => {
        dispatch(getLivingLocationPosts())
    }, [])
    console.log('Home page', livingLocationPosts)

    const openPost = (id) => {   
        history.push({
            pathname: `/posts/${id}`,
            imgUrl: LivImg,
            title: 'Living/Location',
            redirectPathname: '/living-location-details'
        })
    }

    return (
        <Grid container className={classes.home}>
            <Grid item lg={9} md={9}>
                <div className={classes.postsWrapper}>
                    <div>
                        <h5>Latest Posts</h5>
                        {
                            livingLocationPosts.map(post => (
                                <div key={post._id} onClick={() => openPost(post._id)}>{post.title}</div>
                            ))
                        }
                    </div>
                    <div>Notice</div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Home
