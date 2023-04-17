import Login from "../feature/login";
import { ROUTE } from "./config";

const routes = [
  {
    name: ROUTE.LOGIN.TITLE,
    path: ROUTE.LOGIN.PATH,
    component: Login,
  },
];

export default routes;
