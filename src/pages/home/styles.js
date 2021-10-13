import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    home: {
        width: '90% !important',
        margin: '0 auto !important'
    },
    carousel: {
        margin: '15px 0'
    },
    postsWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },
    postTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ddd',
        padding: '5px',
        "& > h5": {
            fontSize: '16px'
        }
    },
    storyContainer: {
        border: '1px solid #ddd',
        width: '49%',
    },
    noticeContainer: {
        border: '1px solid #ddd',
        width: '49%'
    },
    postListWrapper: {
        margin: '5px 0'
    },
    postList: {
        marginLeft: '20px',
        lineHeight: '1.5rem',
        width: 'fit-content',
        "&:hover": {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    }

}));

export default useStyles;
