import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    postDetails: {
        width: '90%',
        margin: '0 auto',
        marginBottom: '20px'
    },
    logoWrapper: {
        display: "flex",
        alignItems: "center",
        margin: "15px 0",
    },
    btnWrapper: {
        margin: '20px 0',
    },
    postDetailsImg: {
        maxWidth: '600px',
        margin: '25px 0'
    },
    postDetailsTitle: {
        marginBottom: '10px'
    },
    postDetailsMessage: {
        lineHeight: '1.5rem'
    },
    editBtn: {
        border: 'none',
        padding: '10px',
        background: '#ccc',
        cursor: 'pointer',
        marginRight: '10px'
    },
    deleteBtn: {
        border: 'none',
        padding: '10px',
        background: '#b72a0f',
        cursor: 'pointer',
        color: '#f2f2f2'
    }
}));

export default useStyles;
