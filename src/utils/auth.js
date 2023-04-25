import { ROLE } from "../common/constants";
import { getLocalItem } from "./storage";

/**
 * Check user is logged in
 * @returns {boolean}
 */
export const isAuth = () => {
  const roles = [ROLE.ADMIN];
  const localToken = localStorage.getItem("token");
  const roleUser = getLocalItem("userInfo")?.role;
  let isAuth = false;
  if (localToken && roles.includes(roleUser)) {
    isAuth = true;
  }
  return isAuth;
};
