import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import useStyles from './styles'

const Layout = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.layout}>
            <Header/>
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout
