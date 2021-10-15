import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   title: {
       "&:hover": {
           textDecoration: "underline",
           cursor: "pointer"
       }
   }
}));

export default useStyles;
