export const ROUTE = {
  DASHBOARD: {
    PATH: "/yls",
    TITLE: "dashboard",
  },
  HOMEPAGE: {
    PATH: "/yls/home-page",
    TITLE: "homepage",
  },
  PRODUCT_MANAGEMENT: {
    LIST: {
      PATH: "/yls/product",
      TITLE: "productManagement",
    },
    CREATE: {
      PATH: "/yls/product-management/create",
      TITLE: "productManagementCreate",
    },
    DETAIL: {
      PATH: "/yls/product-management/:id/detail",
      TITLE: "productManagementDetail",
    },
    EDIT: {
      PATH: "/yls/product-management/:id/edit",
      TITLE: "productManagementEdit",
    },
  },
  CATEGORY_MANAGEMENT: {
    PATH: "/yls/category",
    TITLE: "categoryManagement",
  },
  SUBCATEGORY_MANAGEMMENT: {
    PATH: "/yls/sub-category",
    TITLE: "subCategoryManagement",
  },
  COLOR_MANAGEMENT: {
    PATH: "/yls/color",
    TITLE: "colorManagement",
  },
  SIZE_MANAGEMENT: {
    PATH: "/yls/size",
    TITLE: "sizeManagement",
  },
  USER_MANAGEMENT: {
    PATH: "/yls/user-operator",
    TITLE: "userManagement",
  },
  ORDER_MANAGEMENT: {
    PATH: "/yls/order",
    TITLE: "orderManagement",
  },
};
