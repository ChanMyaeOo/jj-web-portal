import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    photoCard: {
        cursor: 'pointer',
        margin: '10px'
    },
    creator: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '90%'
    }
}));

export default useStyles;
