import Product from "../feature/Product";

const { default: HomePage } = require("../feature/homepage");
const { ROUTE } = require("./config");

const routes = [
  {
    name: ROUTE.HOMEPAGE.TITLE,
    path: ROUTE.HOMEPAGE.PATH,
    component: HomePage,
    icon: "home",
  },
  {
    name: ROUTE.PRODUCT.TITLE,
    path: ROUTE.PRODUCT.PATH,
    component: Product,
    icon: "product",
  },
];

export default routes;
