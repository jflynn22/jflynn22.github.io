import React, { memo, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import AboutMe from "../AboutMe/AboutMe";
import ContactInfo from "../ContactInfo/ContactInfo";

function TabPanel(children: any, index: number, value: number) {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
    >
      <Box p={3}> {children} </Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

function Header() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          indicatorColor="primary"
          onChange={handleChange}
          value={value}
          variant="fullWidth"
        >
          <Tab label={"About Me"} {...a11yProps(0)} />
          <Tab label={"Creative Work"} {...a11yProps(1)} />
          <Tab label={"Under Contruction"} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      {value === 0 ? TabPanel(<AboutMe />, 0, 0) : undefined}
      {value === 1 ? TabPanel("Item Two", 1, 1) : undefined}
      {value === 2 ? TabPanel("Item Three", 2, 2) : undefined}
      <ContactInfo />
    </div>
  );
}

export default memo(Header);
