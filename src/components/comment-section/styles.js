import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  commentSection: {
      width: '90%',
        margin: '0 auto',
        marginBottom: '20px'
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
      height: '200px',
      overflowY: 'auto',
      marginRight: '30px'
  }
}));
