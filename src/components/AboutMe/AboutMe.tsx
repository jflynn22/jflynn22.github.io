import React, { memo } from "react";

import jakeAndBob from "../../images/jakeAndBob.jpg";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./AboutMe.styles";

const description =
  "Hello everyone! My name is Jake Flynn and I am a Computer Science major at Johns Hopkins University, focusing on Information Security. sergsegh sethsrthsrdh rtdhrdthrdgtjnsrgtjn srthsthsthseth sehsethszteh sezthsezthsztehszte hstehsth sthstzhsteh ";

function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <img src={jakeAndBob} className={classes.image} />
      </div>
      <Typography className={classes.text}>{description}</Typography>
    </div>
  );
}

export default memo(AboutMe);
