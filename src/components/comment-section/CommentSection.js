import React, { useState, useRef, useEffect } from "react";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useStyles from "./styles.js";
import { commentPost, getPost} from "../../actions/posts";

const CommentSection = ({ post }) => {
    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    const commentsRef = useRef()
    const { id } = useParams();

    useEffect(() => {
        // setComments(post?.comments)
        setComments(post.comments)
    }, [post.comments, id]);

    console.log('Comment section post comments', post.comments)

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;
        const newComments = await dispatch(commentPost(finalComment, post._id));
        setComments(newComments)
        setComment('')

        commentsRef.current.scrollIntoView({ behavior: 'smooth'})
    };

    return (
        <>
            <Grid container className={classes.commentSection}>
                <Grid
                    item
                    lg={9}
                    md={9}
                    className={classes.commentsOuterContainer}
                >
                    <div className={classes.commentsInnerContainer}>
                        <Typography gutterBottom variant="p">
                            {comments.length > 0 ? 'Comments' : 'There is no comment.'}
                        </Typography>
                        {comments.map((c, i) => (
                            <Typography
                                key={i}
                                gutterBottom
                                variant="subtitle1"
                            >
                                <strong>{c.split(': ')[0]}</strong>
                                {c.split(':')[1]}
                            </Typography>
                        ))}
                        <div ref={commentsRef} />
                    </div>

                    {user?.result?.name && (
                        <div style={{ width: "70%" }}>
                            <Typography gutterBottom variant="p">
                                Write a Comment
                            </Typography>
                            <TextField
                                fullWidth
                                rows={4}
                                variant="outlined"
                                label="Comment"
                                multiline
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                style={{ marginTop: '10px'}}
                            />

                            <Button
                                style={{ marginTop: "10px" }}
                                fullWidth
                                disabled={!comment}
                                color="primary"
                                variant="contained"
                                onClick={handleClick}
                            >
                                Comment
                            </Button>
                        </div>
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default CommentSection;
