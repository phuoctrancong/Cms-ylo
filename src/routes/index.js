import { omit } from "lodash";
import authRoutes from "../modules/auth/routes";
import publicRoutes from "../modules/public/routes";
import yoloRoutes from "../modules/yolo/routes";

const flatten = (arr) => {
  if (!arr) return [];

  return arr.reduce(
    (acc, cur) => [
      ...acc,
      ...(cur.path ? [omit(cur, "subMenu")] : []),
      ...flatten(cur.subMenu),
    ],
    []
  );
};
// export const appRoutes = [...publicRoutes, ...authRoutes, ...privateRoutes];
export const privateRoutes = [...yoloRoutes];
export const privateRoutesFlatten = flatten(privateRoutes);
export const appRoutes = [...publicRoutes, ...authRoutes, ...privateRoutes];
export const appRoutesFlatten = flatten(appRoutes);
export const appRoutesObj = {
  yolo: yoloRoutes,
};
