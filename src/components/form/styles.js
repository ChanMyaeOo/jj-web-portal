import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   formWrapper: {
        width: "90%",
        margin: "0 auto",
   },
   logoWrapper: {
        display: "flex",
        alignItems: "center",
        margin: "15px 0",
    },
    form: {
         display: 'flex',
         flexDirection: 'column'
    },
    formTitle: {
          height: '40px',
          padding: '0 10px'
    },
    formDescription: {
          margin: '20px 0',
          height: '200px',
          padding: '10px'
    },
    btnCompleted: {
         width: 'fit-content',
         marginLeft: 'auto',
         marginTop: '25px',
         marginBottom: '20px',
         padding: '10px',
         border: 'none',
         cursor: 'pointer',
         background: '#b72a0f',
         color: '#f2f2f2'
    }
}));

export default useStyles;
