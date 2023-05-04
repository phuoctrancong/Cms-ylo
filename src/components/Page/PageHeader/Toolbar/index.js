import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../modules/auth/redux/hooks/useAuth";
import { ROUTE } from "../../../../modules/yolo/routes/config";
import { useClasses } from "../../../../themes";
import Icon from "../../../Icon";
import style from "./style";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import Dropdown from "../../../Dropdown";

const Toolbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { actions } = useAuth();
  const classes = useClasses(style);
  const options = [
    {
      label: t("page.userInfo"),
      icon: <Icon name="user" size={18} />,
      onClick: () => navigate(ROUTE.USER_MANAGEMENT.DETAIL.PATH),
    },
    // {
    //   label: t("page.changePassword"),
    //   icon: <KeyIcon fontSize="small" />,
    //   onClick: () => history.push(ROUTE.ACCOUNT.CHANGE_PASSWORD.PATH),
    // },
    {
      label: t("page.logout"),
      icon: <LogoutIcon fontSize="small" />,
      onClick: () => actions.logout(),
    },
  ];

  return (
    <Box className={classes.root}>
      {/* <Button className={classes.btn} icon="setting" color="grayEE" /> */}
      {/* <Notification /> */}
      {/* <LanguageSwitcher /> */}
      <Dropdown
        options={options}
        color="grayEE"
        icon="user"
        handleMenuItemClick={(opt) => opt.onClick()}
        sx={{
          width: 40,
          minWidth: 40,
          height: 40,
        }}
      />
    </Box>
  );
};

export default Toolbar;
