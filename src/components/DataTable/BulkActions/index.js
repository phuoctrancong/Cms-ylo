import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BULK_ACTION_OPTIONS } from "../../../common/constants";
import Icon from "../../Icon";

const BulkActions = ({ bulkActions, selected, uniqKey = "id" }) => {
  const { t } = useTranslation();
  const [action, setAction] = useState(0);
  const options = BULK_ACTION_OPTIONS.filter((opt) =>
    (bulkActions?.actions || []).includes(opt.value)
  ).map((opt) => ({ ...opt, icon: <Icon name={opt.icon} /> }));
  const isOpen = !!action;
  const close = () => setAction(0);
  return <div>BulkActions</div>;
};

export default BulkActions;
