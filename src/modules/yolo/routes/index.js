import Dashboard from "../feature/dashboard";
import Product from "../feature/Product";

const { default: HomePage } = require("../feature/homepage");
const { ROUTE } = require("./config");

const routes = [
  {
    name: ROUTE.DASHBOARD.TITLE,
    path: ROUTE.DASHBOARD.PATH,
    component: Dashboard,
    icon: "home",
    isInSidebar: true,
  },
  {
    name: ROUTE.HOMEPAGE.TITLE,
    path: ROUTE.HOMEPAGE.PATH,
    component: HomePage,
    icon: "home",
    isInSidebar: true,
  },
  {
    name: ROUTE.PRODUCT_MANAGEMENT.LIST.TITLE,
    path: ROUTE.PRODUCT_MANAGEMENT.LIST.PATH,
    component: Product,
    icon: "database",
    isInSidebar: true,
    subMenu: [
      {
        name: ROUTE.PRODUCT_MANAGEMENT.CREATE.TITLE,
        path: ROUTE.PRODUCT_MANAGEMENT.CREATE.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.PRODUCT_MANAGEMENT.DETAIL.TITLE,
        path: ROUTE.PRODUCT_MANAGEMENT.DETAIL.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.PRODUCT_MANAGEMENT.EDIT.TITLE,
        path: ROUTE.PRODUCT_MANAGEMENT.EDIT.PATH,
        component: Product,
        isInSidebar: false,
      },
    ],
  },
];

export default routes;
