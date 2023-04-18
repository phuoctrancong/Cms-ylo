import React from "react";

import { Box } from "@mui/material";
import PropTypes from "prop-types";
import style from "./style";
import { useClasses } from "../../themes";

const AuthLayout = ({ children }) => {
  const classes = useClasses(style);

  return (
    <Box className={classes.root}>
      <Box className={classes.leftPanel}>
        <Box className={classes.logo}></Box>
      </Box>
      <Box className={classes.rightPanel}>
        <Box className={classes.main}>
          <Box className={classes.box}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

AuthLayout.defaultProps = {
  children: null,
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
