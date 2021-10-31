import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    rightPreview: {
        padding: '10px 0 10px 10px',
        "& > ul": {
            listStyle: 'none',
            "& > li": {
                textAlign: 'center',
                height: '20px',
                borderBottom: '1px dotted #ddd',
                padding: '10px 0',
                "& > a": {
                    textDecoration: 'none',
                    color: '#000',
                    "&:hover": {
                        textDecoration: 'underline'
                    }
                }
            }
        }
    },
    btn: {
        textDecoration: 'none',
        padding: '15px 0 15px 15px',
        background: '#e3eef7',
        display: 'block',
        margin: '20px 0',
        textAlign: 'center',
        color: '#455867',
        fontWeight: 'bold'
    },
    adImg: {
        width: '100%',
        margin: '10px 0'
    }
}));

export default useStyles;
