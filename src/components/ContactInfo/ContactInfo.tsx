import React, { memo } from "react";

import Typography from "@material-ui/core/Typography";

import { useStyles } from "./ConstactInfo.styles";

function ContactInfo() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography>
        If you would like to contact me, please use one of the below methods!
      </Typography>
      <ul className={classes.list}>
        <li>Personal Email: jflynn22@jhu.edu</li>
        <li>School Email: jflynn135@gmail.com</li>
      </ul>
    </div>
  );
}

export default memo(ContactInfo);
