import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    detailsWrapper: {
        width: "90%",
        margin: "0 auto",
    },
    logoWrapper: {
        display: "flex",
        alignItems: "center",
        margin: "15px 0",
    },
    detailsHeader: {
        display: "flex",
        justifyContent: "space-between",
        "& > p": {
            background: "#ddd",
            padding: "10px",
        },
        "& > a": {
            background: "#b72a0f",
            padding: "10px",
            color: "#f2f2f2",
            textDecoration: "none",
        },
    },
}));

export default useStyles;
