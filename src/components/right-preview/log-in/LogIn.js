import React, { useState } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LOGOUT } from '../../../constants/actionTypes'
import { signin } from '../../../actions/auth'
import useStyles from "./styles";

const initialState = {
    email: "",
    password: "",
};

const LogIn = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    
    // const user = JSON.parse(localStorage.getItem("profile"));
    const dispatch = useDispatch()
    const history = useHistory()
    
    const logout = () => {
        dispatch({ type: LOGOUT });

        history.push("/");

        setUser(null);
        history.go(0)
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(formData, history));
    }

    return (
        <div className={classes.formWrapper}>
            {user?.result ? (
                <div className={classes.formLogOut}>
                    <AccountCircleIcon className={classes.icon} />

                    <div>
                        <p>{user?.result.name}</p>
                        <button className={classes.logOutBtn} onClick={logout}>Log Out</button>
                    </div>
                </div>
            ) : (
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div>
                        <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}  />
                    </div>

                    <button className={classes.logInBtn} type="submit">Log In</button>
                </form>
            )}
        </div>
    );
};

export default LogIn;
