import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from 'react-router-dom'
import useStyles from './styles'

const Post = ({ post, imgUrl, title, redirectPathname }) => {
    const classes = useStyles()
    const history = useHistory()
    const openPost = () => {   
        history.push({
            pathname: `/posts/${post._id}`,
            imgUrl,
            title,
            redirectPathname
        })
    }
    console.log('Post location ', redirectPathname)
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                100
            </TableCell>
            <TableCell align="center" onClick={openPost} className={classes.title}>
                {post.title}
            </TableCell>
            <TableCell align="center">Polar</TableCell>
            <TableCell align="center">20</TableCell>
            <TableCell align="center">7-10-2021</TableCell>
        </TableRow>
    );
};

export default Post;
