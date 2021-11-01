import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import LivingLocation from './pages/living-location/LivingLocation';
import Form from './components/form/Form'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getPhotoAlbumPosts } from './actions/posts'
import PostDetails from './components/post-details/PostDetails'
import PhotoAlbum from './pages/photo-album/PhotoAlbum';
import Notice from './pages/notice/Notice'
import BuySell from './pages/buy-sell/BuySell'
import Recruitment from './pages/recruitment/Recruitment'
import Auth from './pages/auth/Auth'
import OwnPosts from './pages/own-posts/OwnPosts'

const App = () => {
    const dispatch = useDispatch()
    const { currentId } = useSelector(state => state.data)
    const user = JSON.parse(localStorage.getItem("profile"))

    useEffect(() => {
        dispatch(getPosts())
        dispatch(getPhotoAlbumPosts())
    }, [currentId, dispatch])
    return (
        <>
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route path="/own-posts">
                        <Layout>
                            {
                                user ? <OwnPosts /> : <Redirect to="/auth" />
                            }
                            
                        </Layout>
                    </Route>
                    <Route path="/posts/:id">
                        <Layout>
                            <PostDetails />
                        </Layout>
                    </Route>
                    <Route path="/form">
                        <Layout>
                            <Form />
                        </Layout>
                    </Route>
                     {/* <Route path="/auth">
                        <Layout>
                            {
                                user ? <Redirect to="/" /> : <Auth />
                            }
                            
                        </Layout>
                    </Route> */}

                    <Route path="/auth" exact component={() => (!user ? (
                        <Layout>
                            <Auth />
                        </Layout>
                    ) : <Redirect to="/" />)} />

                    <Route path="/living-location-details">
                        <Layout>
                            <LivingLocation />
                        </Layout>
                    </Route>
                     <Route path="/photo-album">
                        <Layout>
                            <PhotoAlbum />
                        </Layout>
                    </Route>
                    <Route exact path="/notice">
                        <Layout>
                            <Notice />
                        </Layout>
                    </Route>
                    <Route exact path="/buy-sell">
                        <Layout>
                            <BuySell />
                        </Layout>
                    </Route>
                    <Route path="/job-search">
                        <Layout>
                            <Recruitment />
                        </Layout>
                    </Route>

                    <Route exact path="/" component={() => (
                        <Layout>
                            <Home />
                        </Layout>
                    )} />
                </Switch>
            </Router>
        </>
    )
}

export default App