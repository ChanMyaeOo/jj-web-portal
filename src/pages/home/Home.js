import React from 'react'
import useStyles from './styles'

const Home = () => {
    const classes = useStyles()
    return (
        <div>
            <h1 className={classes.title}>Home</h1>
        </div>
    )
}

export default Home
