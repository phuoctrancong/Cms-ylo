import React from "react";

import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Navigate, Redirect, useLocation, useNavigate } from "react-router-dom";

import { isAuth } from "../../utils";
import { useApp } from "../../common/hook/useApp";
import { ROLE } from "../../common/constants";
import Sidebar from "../../components/SideBar";
import HomePage from "../../modules/yolo/feature/homepage";

const PrivateLayout = ({ children }) => {
  const { canAccess } = useApp();
  if (!isAuth() && canAccess !== ROLE.ADMIN) {
    return <Navigate to="/login" />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Sidebar />
      {/* <Box sx={{ flex: 1, overflow: "hidden" }}>{children}</Box> */}
    </Box>
  );
};

PrivateLayout.defaultProps = {
  children: null,
};

PrivateLayout.propTypes = {
  children: PropTypes.node,
};

export default PrivateLayout;
