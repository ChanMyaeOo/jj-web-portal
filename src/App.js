import React from 'react'
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

const App = () => {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Switch>
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