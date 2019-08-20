import React, { memo } from "react";

import Typography from "@material-ui/core/Typography";

function ContactInfo() {
  return (
    <>
      <Typography>
        If you would like to contact me, please use one of the below methods!
      </Typography>
      <ul>
        <li>Personal Email: jflynn22@jhu.edu</li>
        <li>School Email: jflynn135@gmail.com</li>
      </ul>
    </>
  );
}

export default memo(ContactInfo);
