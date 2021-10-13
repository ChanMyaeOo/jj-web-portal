import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import LivingLocation from './pages/living-location/LivingLocation';
import Form from './components/form/Form'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './actions/posts'
import PostDetails from './components/post-details/PostDetails'
import PhotoAlbum from './pages/photo-album/PhotoAlbum';

const App = () => {
    const dispatch = useDispatch()
    const { currentId } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])
    return (
        <>
            <Router>
                <ScrollToTop />
                <Switch>
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
                    <Route path="/">
                        <Layout>
                            <Home />
                        </Layout>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App