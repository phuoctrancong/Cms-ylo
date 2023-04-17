import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuth } from "../../../../utils/auth";

import qs from "../../../../utils/qs";

const NavigatePage = () => {
  const location = useLocation();
  const { callbackUrl } = qs.parse(location.search);

  if (!!callbackUrl) {
    if (isAuth()) {
      return <Navigate to={callbackUrl} />;
    }

    return <Navigate to={`/login?${qs.stringify({ callbackUrl })}`} />;
  }
  return <Navigate to="/" />;
};

export default NavigatePage;
