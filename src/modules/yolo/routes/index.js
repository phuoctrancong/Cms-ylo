import Color from "../feature/color";
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
  // {
  //   name: ROUTE.HOMEPAGE.TITLE,
  //   path: ROUTE.HOMEPAGE.PATH,
  //   component: HomePage,
  //   icon: "home",
  //   isInSidebar: true,
  // },
  {
    name: ROUTE.CATEGORY_MANAGEMENT.LIST.TITLE,
    path: ROUTE.CATEGORY_MANAGEMENT.LIST.PATH,
    component: Product,
    icon: "database",
    isInSidebar: true,
    subMenu: [
      {
        name: ROUTE.CATEGORY_MANAGEMENT.CREATE.TITLE,
        path: ROUTE.CATEGORY_MANAGEMENT.CREATE.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.CATEGORY_MANAGEMENT.DETAIL.TITLE,
        path: ROUTE.CATEGORY_MANAGEMENT.DETAIL.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.CATEGORY_MANAGEMENT.EDIT.TITLE,
        path: ROUTE.CATEGORY_MANAGEMENT.EDIT.PATH,
        component: Product,
        isInSidebar: false,
      },
    ],
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
  {
    name: ROUTE.COLOR_MANAGEMENT.LIST.TITLE,
    path: ROUTE.COLOR_MANAGEMENT.LIST.PATH,
    component: Color,
    icon: "database",
    isInSidebar: true,
    subMenu: [
      {
        name: ROUTE.COLOR_MANAGEMENT.CREATE.TITLE,
        path: ROUTE.COLOR_MANAGEMENT.CREATE.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.COLOR_MANAGEMENT.DETAIL.TITLE,
        path: ROUTE.COLOR_MANAGEMENT.DETAIL.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.COLOR_MANAGEMENT.EDIT.TITLE,
        path: ROUTE.COLOR_MANAGEMENT.EDIT.PATH,
        component: Product,
        isInSidebar: false,
      },
    ],
  },
  {
    name: ROUTE.SIZE_MANAGEMENT.LIST.TITLE,
    path: ROUTE.SIZE_MANAGEMENT.LIST.PATH,
    component: Product,
    icon: "database",
    isInSidebar: true,
    subMenu: [
      {
        name: ROUTE.SIZE_MANAGEMENT.CREATE.TITLE,
        path: ROUTE.SIZE_MANAGEMENT.CREATE.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.SIZE_MANAGEMENT.DETAIL.TITLE,
        path: ROUTE.SIZE_MANAGEMENT.DETAIL.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.SIZE_MANAGEMENT.EDIT.TITLE,
        path: ROUTE.SIZE_MANAGEMENT.EDIT.PATH,
        component: Product,
        isInSidebar: false,
      },
    ],
  },
  {
    name: ROUTE.USER_MANAGEMENT.LIST.TITLE,
    path: ROUTE.USER_MANAGEMENT.LIST.PATH,
    component: Product,
    icon: "database",
    isInSidebar: true,
    subMenu: [
      {
        name: ROUTE.USER_MANAGEMENT.CREATE.TITLE,
        path: ROUTE.USER_MANAGEMENT.CREATE.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.USER_MANAGEMENT.DETAIL.TITLE,
        path: ROUTE.USER_MANAGEMENT.DETAIL.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.USER_MANAGEMENT.EDIT.TITLE,
        path: ROUTE.USER_MANAGEMENT.EDIT.PATH,
        component: Product,
        isInSidebar: false,
      },
    ],
  },
  {
    name: ROUTE.ORDER_MANAGEMENT.LIST.TITLE,
    path: ROUTE.ORDER_MANAGEMENT.LIST.PATH,
    component: Product,
    icon: "database",
    isInSidebar: true,
    subMenu: [
      {
        name: ROUTE.ORDER_MANAGEMENT.CREATE.TITLE,
        path: ROUTE.ORDER_MANAGEMENT.CREATE.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.ORDER_MANAGEMENT.DETAIL.TITLE,
        path: ROUTE.ORDER_MANAGEMENT.DETAIL.PATH,
        component: Product,
        isInSidebar: false,
      },
      {
        name: ROUTE.ORDER_MANAGEMENT.EDIT.TITLE,
        path: ROUTE.ORDER_MANAGEMENT.EDIT.PATH,
        component: Product,
        isInSidebar: false,
      },
    ],
  },
];

export default routes;
