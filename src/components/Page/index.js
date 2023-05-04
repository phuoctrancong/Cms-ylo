import { Box, Paper } from "@mui/material";
import React from "react";
import { useClasses } from "../../themes";
import PageHeader from "./PageHeader";
import { PropTypes } from "prop-types";

import style from "./style";
const Page = ({
  onSearch,
  placeholder,
  onBack,
  title,
  renderHeaderRight,
  renderSearchBox,
  breadcrumbs,
  children,
  PaperProps,
  loading,
  sx,
  fitScreen,
  freeSolo,
}) => {
  const classes = useClasses(style);
  return (
    <Box className={classes.root} sx={sx}>
      <PageHeader
        onSearch={onSearch}
        placeholder={placeholder}
        onBack={onBack}
        title={title}
        renderHeaderRight={renderHeaderRight}
        renderSearchBox={renderSearchBox}
        breadcrumbs={breadcrumbs}
      />

      {freeSolo ? (
        children
      ) : (
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            ...(fitScreen ? { overflow: "auto", flex: 1 } : {}),
          }}
          {...PaperProps}
        >
          {children}
        </Paper>
      )}

      {/* <PageFooter /> */}

      {/* <Loading open={loading}></Loading> */}
    </Box>
  );
};
Page.defaultProps = {
  title: "",
  PaperProps: {},
  loading: false,
  sx: {},
  fitScreen: false,
  freeSolo: false,
};

Page.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  onBack: PropTypes.func,
  title: PropTypes.string,
  renderHeaderRight: PropTypes.func,
  renderSearchBox: PropTypes.func,
  breadcrumbs: PropTypes.array,
  PaperProps: PropTypes.shape(),
  loading: PropTypes.bool,
  sx: PropTypes.shape(),
  fitScreen: PropTypes.bool,
  freeSolo: PropTypes.bool,
};

export default Page;
