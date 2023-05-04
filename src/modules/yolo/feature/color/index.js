import { Button, IconButton } from "@mui/material";
import { Field, Form, Formik, FormikProps } from "formik";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useQueryState } from "../../../../common/hook/useQueryState";
import Icon from "../../../../components/Icon";
import Page from "../../../../components/Page";
import { ROUTE } from "../../routes/config";
const breadcrumbs = [
  {
    route: ROUTE.COLOR_MANAGEMENT.LIST.PATH,
    title: ROUTE.COLOR_MANAGEMENT.LIST.TITLE,
  },
];

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};
function Color() {
  const { t } = useTranslation(["yolo"]);
  const navigate = useNavigate();
  const DEFAULT_FILTERS = {
    code: "",
    name: "",
    createdAt: "",
  };
  const [modal, setModal] = useState({
    tempItem: null,
    isOpenUpdateStatusModal: false,
  });
  const {
    page,
    pageSize,
    sort,
    filters,
    keyword,
    setPage,
    setPageSize,
    setSort,
    setFilters,
    setKeyword,
  } = useQueryState({
    filters: DEFAULT_FILTERS,
  });
  const columns = useMemo(() => [
    {
      field: "code",
      headerName: t("defineColor.code"),
      width: 150,
      sortable: true,
      fixed: true,
    },
    {
      field: "name",
      headerName: t("defineColor.name"),
      width: 150,
      sortable: true,
      fixed: true,
    },
    {
      field: "description",
      headerName: t("defineColor.description"),
      width: 200,
    },
    {
      field: "action",
      headerName: t("general:common.action"),
      width: 150,
      align: "center",
      fixed: true,
      renderCell: (params) => {
        const { id, status } = params.row;
        return (
          <>
            <IconButton
              onClick={() =>
                navigate(
                  ROUTE.COLOR_MANAGEMENT.DETAIL.PATH.replace(":id", `${id}`)
                )
              }
            >
              <Icon name="show" />
            </IconButton>
            <IconButton
              onClick={() =>
                navigate(
                  ROUTE.COLOR_MANAGEMENT.EDIT.PATH.replace(":id", `${id}`)
                )
              }
            >
              <Icon name="edit" />
            </IconButton>
            ;
          </>
        );
      },
    },
  ]);
  const renderHeaderRight = () => {
    return (
      <>
        <Button
          onClick={() => navigate(ROUTE.COLOR_MANAGEMENT.CREATE.PATH)}
          icon="add"
          sx={{ ml: 4 / 3 }}
        >
          {t("general:common.create")}
        </Button>
      </>
    );
  };
  return (
    <>
      <Page
        breadcrumbs={breadcrumbs}
        title={t("menu.colorManagement")}
        onSearch={setKeyword}
        placeholder={t("defineColor.searchPlaceholder")}
        renderHeaderRight={renderHeaderRight}
        // loading={isLoading}
      ></Page>
    </>
  );
}

export default Color;
