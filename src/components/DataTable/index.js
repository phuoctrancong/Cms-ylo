import React from "react";

const DataTable = (props) => {
  const {
    rows,
    classes,
    columns: rawColumns = [],
    height,
    total,
    t,
    hideFooter,
    // striped,
    // hover,
    title,
    hideSetting,
    page,
    pageSize,
    sort,
    selected,
    filters,
    onSortChange,
    onPageChange,
    onPageSizeChange,
    onSelectionChange,
    onRowsOrderChange,
    tableSettingKey,
    onSettingChange,
    beforeTopbar,
    afterTopbar,
    enableResizable,
    rowSpanMatrix,
    rowGrayMatrix,
  } = props;
  return <div>DataTable</div>;
};

export default DataTable;
