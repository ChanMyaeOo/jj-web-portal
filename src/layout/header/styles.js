import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        background: '#f4f4f4'
    },
    headerWrap: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '0 auto',
        width: '90%',
        "& > div": {
            padding: '0 10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },

    // Responsive Design
    [theme.breakpoints.down('md')]: {
        // do something
    },
    [theme.breakpoints.down('xs')]: {
       // do something
    },
}));

export default useStyles;
