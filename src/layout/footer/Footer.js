import React from "react";
import { Link } from 'react-router-dom'
import useStyles from "./styles";
import FooterLogo from "../../images/footer.png";

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footerWrapper}>
            <div className={classes.footer}>
                <Link to="/"><img src={FooterLogo} alt="logo" /></Link>
                <div>
                    <div className={classes.footerContent}>
                        <div>Terms of Use</div>
                        <div>|</div>
                        <div>Privacy Policy</div>
                        <div>|</div>
                        <div>Contact Us</div>
                    </div>
                    <p>Copyright &copy; All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
