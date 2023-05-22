import { useMemo } from "react";

import { get } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import defineColorActions from "../actions/define-color";

const useDefineColor = () => {
  const data = useSelector((state) => get(state, "yolo.defineColor"));
  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(defineColorActions, dispatch),
    [dispatch]
  );
  return {
    actions,
    data,
  };
};
export default useDefineColor;
