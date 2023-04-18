export const LANG_OPTIONS = {
  VI: "vi",
  EN: "en",
};
export const DEFAULT_LANG = "vi";
export const NOTIFICATION_TYPE = {
  SUCCESS: "success",
  ERROR: "danger",
  INFO: "info",
  WARNING: "warning",
};
export const MODAL_MODE = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DETAIL: "DETAIL",
  UPDATE_HEADER: "UPDATE_HEADER",
};

export const ROWS_PER_PAGE_OPTIONS = [20, 50, 100];
export const ASYNC_SEARCH_LIMIT = 50;
export const DATE_TIME_FORMAT_BY_LANG = {
  [LANG_OPTIONS.VI]: "dd/MM/yyyy HH:mm:ss",
  [LANG_OPTIONS.EN]: "MMM dd, yyyy HH:mm:ss",
  [LANG_OPTIONS.JP]: "yyyy/MM/dd HH:mm:ss",
};

export const DATE_FORMAT_BY_LANG = {
  [LANG_OPTIONS.VI]: "dd/MM/yyyy",
  [LANG_OPTIONS.EN]: "MMM dd, yyyy",
  [LANG_OPTIONS.JP]: "yyyy/MM/dd",
};

export const UNSAFE_DATE_FORMAT_3 = "yyyy-MM-dd";
export const UNSAFE_DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm";
export const IMPORT_EXPORT_DATE_FORMAT = "dd-MM-yyyy_HH_mm_SS";

export const DEFAULT_TIME = "00:00";
export const ROLE = {
  USER: 0,
  ADMIN: 1,
};
