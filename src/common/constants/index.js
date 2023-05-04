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
export const TEXTFIELD_ALLOW = {
  NUMERIC: /[^0-9]/g,
  POSITIVE_DECIMAL: /[^0-9.]/g,
  ALPHABET: /[^a-zA-Z]/g,
  ALPHANUMERIC: /[^0-9a-zA-Z]/g,
  ALPHANUMERIC_DOT: /[^0-9a-zA-Z.]/g,
  ALPHANUMERIC_SPECIALS:
    /[^0-9a-zA-Z-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]/g,
  EXCEPT_SPECIALS: /[._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]/g,
  EXCEPT_SPACES: /[\s]/g,
  ALPHANUMERIC_DOT_UNDERSCORE: /[^0-9a-zA-Z._]/g,
  REGEX_CODE_VIETNAMESE:
    /[^a-zA-Z0-9ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s&,\/._]+$/g,
};

export const TEXTFIELD_PREVENT = {
  [TEXTFIELD_ALLOW.NUMERIC]: [",", ".", "-", "+", "e", "E"],
  [TEXTFIELD_ALLOW.POSITIVE_DECIMAL]: [",", "-", "+", "e", "E"],
};
export const BULK_ACTION = {
  APPROVE: 1,
  REJECT: 2,
  DELETE: 3,
};

export const BULK_ACTION_OPTIONS = [
  {
    value: BULK_ACTION.APPROVE,
    text: "bulkActions.approve",
    icon: "tick",
  },
  {
    value: BULK_ACTION.REJECT,
    text: "bulkActions.reject",
    icon: "remove",
  },
  {
    value: BULK_ACTION.DELETE,
    text: "bulkActions.delete",
    icon: "delete",
  },
];
