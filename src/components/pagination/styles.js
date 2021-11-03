import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  ul: {
    width: "60%",
    justifyContent: 'space-around',
    margin: '10px auto',
    padding: '10px 0'
  },

   // Responsive Design
    [theme.breakpoints.down("md")]: {
        
    },
    [theme.breakpoints.down("xs")]: {
      ul: {
        width: '100%'
      }
    },
}));
