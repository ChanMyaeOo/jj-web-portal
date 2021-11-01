import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CircularProgress } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from "./styles";
import RightPreview from "../../components/right-preview/RightPreview";
import { getOwnPosts } from '../../actions/posts'
import Preview from '../../components/preview/Preview'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const OwnPosts = () => {
    const query = useQuery();
    const page = query.get('page') || 1;
    const classes = useStyles();
    const { ownPosts, posts, isLoading } = useSelector(
        (state) => state.posts
    );
    const dispatch = useDispatch()
    return (
        <div className={classes.ownPosts}>
            <Preview  showOwnPosts={true} hideLogo={false} pgForOwnPosts={true} page={page} />
        </div>
    );
};

export default OwnPosts;
