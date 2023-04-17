const { default: HomePage } = require("../feature/homepage");
const { ROUTE } = require("./config");

const routes = [
  {
    name: ROUTE.HOMEPAGE.TITLE,
    path: ROUTE.HOMEPAGE.PATH,
    component: HomePage,
    icon: "home",
  },
];

export default routes;
