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
import { useLocation } from 'react-router-dom'

import Posts from '../posts/Posts'

const Preview = ({ imgUrl, title }) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <Grid container className={classes.detailsWrapper}>
            <Grid item lg={9} md={9}>
                <div className={classes.logoWrapper}>
                    <img src={imgUrl} alt="logo" />
                    <span>{title}</span>
                </div>
                <div className={classes.detailsHeader}>
                    <p>Total 200 posts </p>
                    
                    <Link to={{
                        pathname: '/form',
                        imgUrl,
                        title,
                        redirectPathname: location.pathname
                    }}>writing</Link>
                </div>

                <div className={classes.previewTable}>
                    <TableContainer component={Paper}>
                        <Table
                            className={classes.table}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                       number
                                    </TableCell>
                                    <TableCell align="center">
                                        title
                                    </TableCell>
                                    <TableCell align="center">
                                        writer
                                    </TableCell>
                                    <TableCell align="center">
                                        lookup
                                    </TableCell>
                                    <TableCell align="center">
                                        date
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <Posts imgUrl={imgUrl} title={title}/>
                                    {/* <TableRow >
                                        <TableCell component="th" scope="row">
                                            100
                                        </TableCell>
                                        <TableCell align="center" >
                                            Can i bring food into UK?
                                        </TableCell>
                                        <TableCell align="center">
                                            Polar
                                        </TableCell>
                                        <TableCell align="center">
                                            20
                                        </TableCell>
                                        <TableCell align="center">
                                            7-10-2021
                                        </TableCell>
                                    </TableRow> */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Grid>
            <Grid item lg={3} md={3}>
                Right Side
            </Grid>
        </Grid>
    );
};

export default Preview;
