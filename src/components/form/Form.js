import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../actions/posts";
import { setCurrentId } from "../../actions/data";
import useStyles from "./styles";

const Form = () => {
    const [postData, setPostData] = useState({
        title: "",
        message: "",
        selectedFile: "",
    });
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const currentId = useSelector((state) => state.data.currentId);
    const post = useSelector((state) =>
        currentId
            ? state.posts.posts.find((post) => post._id === currentId)
            : null
    );

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form location ", location.redirectPathname);
        if (currentId === null) {
            dispatch(createPost({ ...postData, tag: location.title})).then(() => history.push(location.redirectPathname));
        } else {
            dispatch(updatePost(currentId, postData)).then(() => history.push(location.redirectPathname));
            // history.push(location.redirectPathname);
        }
        clear()
    };

    const clear = () => {
        dispatch(setCurrentId(null));
        setPostData({
            title: "",
            message: "",
            selectedFile: "",
        });
    };

    return (
        <Grid container className={classes.formWrapper}>
            <Grid item lg={9} md={9}>
                <div className={classes.logoWrapper}>
                    <img src={location.imgUrl} alt="logo" />
                    <span>{location.title}</span>
                </div>

                <form onSubmit={handleSubmit} className={classes.form}>
                    
                    <input
                        type="text"
                        placeholder="title"
                        className={classes.formTitle}
                        value={postData.title}
                        onChange={(e) =>
                            setPostData({ ...postData, title: e.target.value })
                        }
                    />
                    <textarea
                        placeholder="description"
                        className={classes.formDescription}
                        value={postData.message}
                        onChange={(e) =>
                            setPostData({
                                ...postData,
                                message: e.target.value,
                            })
                        }
                    ></textarea>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                    <button type="submit" className={classes.btnCompleted}>
                        Completed
                    </button>
                </form>
            </Grid>
        </Grid>
    );
};

export default Form;
