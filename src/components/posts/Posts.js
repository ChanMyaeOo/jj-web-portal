import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useSelector } from "react-redux";

const Posts = () => {
    const { posts } = useSelector((state) => state.posts);
    return (
            <>
                {posts.map((post) => (
                    <TableRow key={post._id}>
                        <TableCell component="th" scope="row">
                            100
                        </TableCell>
                        <TableCell align="center">
                            {post.title}
                        </TableCell>
                        <TableCell align="center">Polar</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">7-10-2021</TableCell>
                    </TableRow>
                ))}
            </>
    );
};

export default Posts;
