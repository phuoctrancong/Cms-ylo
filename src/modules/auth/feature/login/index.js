import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormHelperText,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useClasses } from "../../../../themes";
import { loginSchema } from "./schema";
import style from "./style";
import qs from "../../../../utils/qs";
import { useAuth } from "../../redux/hooks/useAuth";
import { isAuth } from "../../../../utils";
import * as Yup from "yup";
import useUserInfo from "../../redux/hooks/useUserInfo";
import { useSelector } from "react-redux";
import { get } from "lodash";
import { ROLE } from "../../../../common/constants";
import NotAuthorized from "../../../../components/Authorized";

const Login = () => {
  const { t } = useTranslation("auth");
  const classes = useClasses(style);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const { actions: userInfoAction } = useUserInfo();
  const { actions, isLoading } = useAuth();
  const location = useLocation();
  const { callbackUrl } = qs.parse(location.search);
  const roles = [ROLE.ADMIN];
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    const params = { ...values };
    actions.login(
      params,
      () => {
        userInfoAction.getUserInfo();
        if (isAuth()) {
          navigate(callbackUrl || "/");
        }
      },
      (e) => {
        setError(e);
      }
    );
  };
  if (isAuth()) {
    return <Navigate to="/" />;
  }
  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        {t("login.pageTitle")}
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
            </div>
            <Button
              type="submit"
              fullWidth
              loading={isLoading}
              // disabled={isSubmitting}
            >
              {t("login.loginButton")}
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default Login;
