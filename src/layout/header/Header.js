import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import PortalHeaderImg from "../../images/web-header.png";
import PortalLogoImg from "../../images/portal-logo.png";
import useStyles from "./styles";

const Header = () => {
    const classes = useStyles();

    const handleOpenMenu = () => {
        const resOverlay = document.getElementById("res-overlay");
        resOverlay.style.display = "block";
    };

    const handleCloseMenu = () => {
        const resOverlay = document.getElementById("res-overlay");
        resOverlay.style.display = "none";
    };

    return (
        <div>
            {/* Desktop View */}
            <div className={classes.desktopViewHeader}>
                <div className={classes.topHeader}>
                    <div className={classes.topHeaderWrap}>
                        <div>log in</div>

                        <div>|</div>

                        <div>join the membership</div>

                        <img src={PortalHeaderImg} alt="portal header" />
                    </div>
                </div>

                <div className={classes.headerLogoWrap}>
                    <Link to="/">
                        <img
                            src={PortalLogoImg}
                            alt="portal logo"
                            className={classes.headerLogo}
                        />
                    </Link>
                </div>

                <div className={classes.bottomHeader}>
                    <ul className={classes.bottomHeaderContent}>
                        <li>
                            <p>british story</p>
                            <ul className={classes.innerHeaderContent}>
                                <Link to="/photo-album">
                                    <li>Photo Album</li>
                                </Link>
                                <Link to="/notice">
                                    <li>Notice</li>
                                </Link>
                            </ul>
                        </li>

                        <li>
                            <p>ask and answer</p>
                            <ul className={classes.innerHeaderContent}>
                                <Link to="/living-location-details">
                                    <li>Living/Location</li>
                                </Link>
                            </ul>
                        </li>

                        <li>
                            <p>buy and sell</p>
                            <ul className={classes.innerHeaderContent}>
                                <Link to="/buy-sell">
                                    <li>Home Appliances</li>
                                </Link>
                            </ul>
                        </li>

                        <li>
                            <p>job search</p>
                            <ul className={classes.innerHeaderContent}>
                                <Link to="/job-search">
                                    <li>Recruitment/Job Search</li>
                                </Link>
                            </ul>
                        </li>

                        <li>
                            <p>lodgment</p>
                            <ul className={classes.innerHeaderContent}>
                                <Link to="/living-location-details">
                                    <li>Living/Location</li>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Android View */}
            <div className={classes.resHeader}>
                <div>
                    <MenuIcon onClick={handleOpenMenu} />
                </div>

                <Link to="/">
                    <img
                        src={PortalLogoImg}
                        alt="header logo"
                        className={classes.resHeaderLogo}
                    />
                </Link>
                <div>join</div>
            </div>

            <div className={classes.overlay} id="res-overlay">
                <div className={classes.resHeaderWrap}>
                    <img
                        src={PortalLogoImg}
                        alt="header logo"
                        className={classes.resHeaderLogo}
                    />
                    <CloseIcon
                        className={classes.resClose}
                        onClick={handleCloseMenu}
                    />
                </div>

                <ul className={classes.resHeaderContent}>
                    <li>
                        <div>
                            british story{" "}
                            <ArrowForwardIosIcon
                                className={classes.resHeaderArrow}
                            />
                        </div>

                        <ul className={classes.resInnerContent}>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </li>

                    <li>
                        <div>
                            ask and answer{" "}
                            <ArrowForwardIosIcon
                                className={classes.resHeaderArrow}
                            />
                        </div>

                        <ul className={classes.resInnerContent}>
                            <li>Living/Location</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </li>

                    <li>
                        <div>
                            buy and sell{" "}
                            <ArrowForwardIosIcon
                                className={classes.resHeaderArrow}
                            />
                        </div>

                        <ul className={classes.resInnerContent}>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </li>

                    <li>
                        <div>
                            job search{" "}
                            <ArrowForwardIosIcon
                                className={classes.resHeaderArrow}
                            />
                        </div>

                        <ul className={classes.resInnerContent}>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </li>

                    <li>
                        <div>
                            lodgment{" "}
                            <ArrowForwardIosIcon
                                className={classes.resHeaderArrow}
                            />
                        </div>

                        <ul className={classes.resInnerContent}>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
