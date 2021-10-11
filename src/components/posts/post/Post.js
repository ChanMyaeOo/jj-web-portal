import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from 'react-router-dom'

const Post = ({ post, imgUrl, title }) => {
    const history = useHistory()
    const openPost = () => {   
        history.push({
            pathname: `/posts/${post._id}`,
            imgUrl,
            title
        })
    }
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                100
            </TableCell>
            <TableCell align="center" onClick={openPost}>
                {post.title}
            </TableCell>
            <TableCell align="center">Polar</TableCell>
            <TableCell align="center">20</TableCell>
            <TableCell align="center">7-10-2021</TableCell>
        </TableRow>
    );
};

export default Post;
