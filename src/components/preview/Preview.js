import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useLocation } from "react-router-dom";

import Posts from "../posts/Posts";
import NoticePosts from "../posts/NoticePosts";
import BuySellPosts from "../posts/BuySellPosts";
import JobSearchPosts from "../posts/JobSearchPosts";
import LivingLocationPosts from "../posts/LivingLocationPosts";
import Paginate from '../pagination/Paginate'


const Preview = ({
    imgUrl,
    title,
    showLivingLocation,
    showNotice,
    showBuyAndSell,
    showJobSearch,
    hideLogo = true,
    pgForNotice,
    pgForHomeAppliances,
    pgForRecruitment,
    page
}) => {
    const classes = useStyles();
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("profile"));
    
    return (
        <Grid container className={classes.detailsWrapper}>
            <Grid item lg={9} md={9}>
                {hideLogo ? (
                    <>
                        <div className={classes.logoWrapper}>
                            <img src={imgUrl} alt="logo" />
                            <span>{title}</span>
                        </div>
                    </>
                ) : null}

                <div className={classes.detailsHeader}>
                    <p>Total 200 posts </p>

                    {user?.result && (
                        <Link
                            to={{
                                pathname: "/form",
                                imgUrl,
                                title,
                                redirectPathname: location.pathname,
                            }}
                        >
                            writing
                        </Link>
                    )}
                </div>

                <div className={classes.previewTable}>
                    <TableContainer component={Paper}>
                        <Table
                            className={classes.table}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>number</TableCell>
                                    <TableCell align="center">title</TableCell>
                                    <TableCell align="center">writer</TableCell>
                                    <TableCell align="center">lookup</TableCell>
                                    <TableCell align="center">date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {showLivingLocation && (
                                    <LivingLocationPosts
                                        imgUrl={imgUrl}
                                        title={title}
                                        redirectPathname={location.pathname}
                                    />
                                )}

                                {showNotice && (
                                    <NoticePosts
                                        imgUrl={imgUrl}
                                        title={title}
                                        redirectPathname={location.pathname}
                                    />
                                )}

                                {showBuyAndSell && (
                                    <BuySellPosts
                                        imgUrl={imgUrl}
                                        title={title}
                                        redirectPathname={location.pathname}
                                    />
                                )}

                                {showJobSearch && (
                                    <JobSearchPosts
                                        imgUrl={imgUrl}
                                        title={title}
                                        redirectPathname={location.pathname}
                                    />
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Paper elevation={6}>
                        <Paginate pgForNotice={pgForNotice} page={page} />
                    </Paper>

                    <Paper elevation={6}>
                        <Paginate pgForHomeAppliances={pgForHomeAppliances} page={page} />
                    </Paper>

                    <Paper elevation={6}>
                        <Paginate pgForRecruitment={pgForRecruitment} page={page} />
                    </Paper>
                </div>
            </Grid>
            <Grid item lg={3} md={3}>
                {/* Right Side */}
            </Grid>
        </Grid>
    );
};

export default Preview;
