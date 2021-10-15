import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    postDetails: {
        width: '90%',
        margin: '0 auto'
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
        maxWidth: '600px'
    }
}));

export default useStyles;
