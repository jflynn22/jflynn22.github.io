import React, { memo } from "react";

import Typography from "@material-ui/core/Typography";

import ContactInfo from "../ContactInfo/ContactInfo";

const description =
  "Hello everyone! My name is Jake Flynn and I am a Computer Science major at Johns Hopkins University, focusing on Information Security.";

function AboutMe() {
  return <Typography>{description}</Typography>;
}

export default memo(AboutMe);
