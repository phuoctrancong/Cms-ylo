import { useMemo } from "react";

import { get } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import userInfoActions from "../actions/user-info";

const useUserInfo = () => {
  const data = useSelector((state) => get(state, "userInfo.userInfo"));
  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(userInfoActions, dispatch),
    [dispatch]
  );
  return {
    actions,
    data,
  };
};

export default useUserInfo;
