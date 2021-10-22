import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    topHeader: {
        background: "#f4f4f4",
    },
    topHeaderWrap: {
        display: "flex",
        justifyContent: "flex-end",
        margin: "0 auto",
        width: "90%",
        "& > div": {
            padding: "0 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        "& > div > a": {
            textDecoration: "none",
            color: '#111'
        }
    },

    headerLogoWrap: {
        display: "flex",
        justifyContent: "center",
    },

    headerLogo: {
        margin: "20px 0",
    },

    bottomHeader: {
        width: "90%",
        margin: "0 auto",
    },

    bottomHeaderContent: {
        display: "flex",
        justifyContent: "space-around",
        background: "#b72a0f",
        maxHeight: "58px",
        "& > li": {
            listStyle: "none",
            zIndex: '1000',
            "&:hover": {
                "& $ul": {
                    zIndex: '1000',
                    display: "block",
                },
            },
        },
        "& > li > p": {
            padding: "20px 50px",
            color: "#f2f2f2",
            "&:hover": {
                background: "#911e09",
            },
        },
    },

    innerHeaderContent: {
        background: "#b72a0f",
        display: "none",
        "& > a": {
            textDecoration: 'none'
        },
        "& > a > li": {
            listStyle: "none",
            padding: "15px 0",
            textAlign: "center",
            fontSize: "90%",
            color: "#f2f2f2",
            "&:hover": {
                cursor: "pointer",
                background: "#911e09",
            },
        },
    },

    resHeader: {
        display: "none",
    },
    
    overlay: {
        width: '100%',
        height: '100%',
        background: '#111',
        position: 'fixed',
        top: '0',
        display: 'none'
    },

    resClose: {
        color: '#fff',
        fontSize: '35px',
        position: 'absolute',
        right: '20px'
    },

    resHeaderWrap: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        borderBottom: '1px solid grey',
        marginBottom: '15px'
    },

    resHeaderContent: {
        width: '60%',
        margin: '0 auto',
        "& > li": {
            listStyle: 'none',
            "&:hover": {
                "& $ul": {
                    display: 'block'
                }
            }
        },
        "& > li > div": {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '5px 30px',
            color: '#fff',
            borderBottom: '1px solid grey',
            padding: '20px',
        }
    },

    resInnerContent: {
        display: 'none',
        "& > li": {
            color: '#f2f2f2',
            marginTop: '10px',
            marginLeft: '40px',
            marginBottom: '15px'
        }
    },

    resHeaderArrow: {
        fontSize: '16px'
    },

    // Responsive Design
    [theme.breakpoints.down("md")]: {
        bottomHeaderContent: {
            "& > li > p": {
                padding: "20px",
            },
        },
    },
    [theme.breakpoints.down("xs")]: {
        desktopViewHeader: {
            display: "none",
        },
        resHeader: {
            background: "#b72a0f",
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'center',
            padding: "10px 20px",
        },
        resHeaderLogo: {
            width: "100px",
            filter: "invert(100%)"
        },
    },
}));

export default useStyles;
