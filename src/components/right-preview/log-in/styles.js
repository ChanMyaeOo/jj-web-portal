import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        background: '#ddd',
        marginTop: '5px',
    },
   form: {
      display: 'flex',
      padding: '10px',
      "& > div > input": {
          width: '100%',
          height: '25px',
          padding: '5px',
          border: 'none',
          outline: 'none',
          borderTop: '1px solid #ddd'
      }
   },
   logInBtn: {
       width: '33%',
       padding: '5px',
       border: 'none',
       outline: 'none',
       "&:hover": {
           cursor: 'pointer'
       }
   }
}));

export default useStyles;
