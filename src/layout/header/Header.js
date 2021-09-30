import React from 'react'
import PortalHeaderImg from '../../images/web-header.png'
import useStyles from './styles'

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <div className={classes.headerWrap}>
                <div>
                    log in
                </div>

                <div>|</div>

                <div>
                    join the membership
                </div>

                <img src={PortalHeaderImg} alt="portal header" />
            </div>
        </div>
    )
}

export default Header
