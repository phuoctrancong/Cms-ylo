import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { format, differenceInDays } from "date-fns";
import { enUS, vi } from "date-fns/locale";

import {
  DATE_TIME_FORMAT_BY_LANG,
  DEFAULT_LANG,
  DATE_FORMAT_BY_LANG,
  LANG_OPTIONS,
} from "../common/constants";

import i18n from "./i18n";

export const lang = i18n.language || DEFAULT_LANG;

export const getLocale = () => {
  switch (lang) {
    case LANG_OPTIONS.VI:
      return vi;
    case LANG_OPTIONS.EN:
    default:
      return enUS;
  }
};
/**
 * Convert date (string or Date) into string with input format
 * @param {Date|String} dateTime
 * @param {String} formatPattern
 * @return {String}
 */

export const convertUtcDateTimeToLocalTz = (dateTime, formatPattern) => {
  const currFormat = formatPattern || DATE_TIME_FORMAT_BY_LANG[lang];
  return dateTime
    ? format(new Date(dateTime), currFormat, { locale: getLocale() })
    : "";
};

export const convertUtcDateToLocalTz = (date, formatPattern) => {
  const currFormat = formatPattern || DATE_FORMAT_BY_LANG[lang];
  return date
    ? format(new Date(date), currFormat, { locale: getLocale() })
    : "";
};

export const getDaysByLang = () => {
  switch (lang) {
    case LANG_OPTIONS.VI:
      return ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
    case LANG_OPTIONS.EN:
    default:
      return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  }
};

export class DateFns extends AdapterDateFns {
  getWeekdays = () =>
    getDaysByLang().map((day) => ({
      charAt: () => day,
    }));
}

export const addHours = (numOfHours, date) => {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

  return date;
};

export const isSameDate = (startDate, endDate) => {
  return differenceInDays(startDate, endDate) === 0;
};
