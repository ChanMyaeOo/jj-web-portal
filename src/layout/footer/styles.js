import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footerWrapper: {
        background: '#f4f4f4',
        marginTop: '20px',
        borderTop: '1px solid #ddd'
    },
    footer: {
        width: '90%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '45px 0',
        "& > img": {
            height: 'fit-content'
        }
    },
    footerContent: {
        display: 'flex',
        marginBottom: '10px',
        fontSize: '90%',
        "& > div": {
            marginRight: '15px'
        }
    },


    // Responsive Design
    [theme.breakpoints.down('md')]: {
        // do something
    },
    [theme.breakpoints.down('xs')]: {
       footer: {
           flexDirection: 'column',
           "& > img": {
               marginBottom: '20px'
           }
       }
    },
}));

export default useStyles;
