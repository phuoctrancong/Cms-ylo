import {
  Box,
  Button,
  Checkbox,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useClasses } from "../../../../themes";
import style from "./style";

const Login = () => {
  const { t } = useTranslation("auth");
  const classes = useClasses(style);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  // const { actions, isLoading } = useAuth()
  // const { actions: userInfoAction } = useUserInfo()
  // const history = useHistory()
  const location = useLocation();
  // const { callbackUrl } = qs.parse(location.search)
  console.log("location", location);
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
    rememberPassword: false,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        {t("login.pageTitle")}
      </Typography>
      <button onClick={() => navigate(-1)}>go back</button>
    </Paper>
  );
};

export default Login;
