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
    const date = new Date(post.createdAt)
    const user = JSON.parse(localStorage.getItem('profile'))
    console.log('Post Test ', post)

    return (
        <TableRow>
            <TableCell align="center" onClick={openPost} className={classes.title}>
                {post.title}
            </TableCell>
            <TableCell align="center">{post.name}</TableCell>
            <TableCell align="center">{
                date.getDate() +  "-" + date.toLocaleString('default', { month: 'long' }) + "-" + date.getFullYear()
            }</TableCell>
        </TableRow>
    );
};

export default Post;
