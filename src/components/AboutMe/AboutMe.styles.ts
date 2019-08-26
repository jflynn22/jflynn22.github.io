import { makeStyles } from "@material-ui/styles";
import { textAlign } from "@material-ui/system";

export const useStyles = makeStyles({
  container: {
    // margin: "auto auto",
    // width: "100%"
  },
  image: {
    transform: "rotate(90deg) scale(0.15)",
    position: "absolute",
    top: "-120%",
    right: "-18%"
  },
  imageWrapper: {
    position: "relative",
    height: "300px",
    width: "500px",
    padding: "0"
  },
  parent: { position: "relative" },
  text: {
    position: "absolute",
    width: "75%",
    textAlign: "left",
    right: "0%"
  }
});
