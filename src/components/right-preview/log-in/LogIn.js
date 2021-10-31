import React from 'react'
import useStyles from './styles'

const LogIn = () => {
    const classes = useStyles()
    return (
        <div className={classes.formWrapper}>
            <form className={classes.form}>
                <div>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                </div>

                <button className={classes.logInBtn}>Log In</button>
            </form>
        </div>
    )
}

export default LogIn
