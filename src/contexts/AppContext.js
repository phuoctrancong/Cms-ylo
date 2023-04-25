import React, { useEffect, createContext, useCallback, useState } from "react";

import { ROLE } from "../common/constants";
import useUserInfo from "../modules/auth/redux/hooks/useUserInfo";
import { getLocalItem, isAuth } from "../utils";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const roles = [ROLE.ADMIN];
  const [refreshKey, setRefreshKey] = useState("");
  // const { actions: notiActions } = useNotification();
  const {
    data: { userInfo, isLoading: isLoadingUser },
    actions: userActions,
  } = useUserInfo();
  const isAuthenticated = isAuth();
  const canAccess = roles.includes(getLocalItem("userInfo")?.role);
  useEffect(() => {
    if (isAuthenticated && !userInfo?.id && !isLoadingUser) {
      userActions.getUserInfo();
    }
  }, [isAuthenticated, userInfo?.id, isLoadingUser]);

  useEffect(() => {
    if (userInfo?.statusNotification) {
      // notiActions.getNotifications({ limit: ROWS_PER_PAGE_OPTIONS[0] });
    }
  }, [userInfo?.statusNotification]);

  const value = {
    refreshKey,
    setRefreshKey,
    clearRefreshKey: () => setRefreshKey(""),
    canAccess: canAccess,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
