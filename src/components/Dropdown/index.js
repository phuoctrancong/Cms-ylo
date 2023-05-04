import React, { useState } from "react";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { PropTypes } from "prop-types";
import { Button } from "@mui/material";

const Dropdown = ({
  options,
  title,
  handleMenuItemClick,
  getOptionLabel,
  renderButton,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [minWidth, setMinWidth] = useState(0);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setMinWidth(event.target.offsetWidth);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {typeof renderButton === "function" ? (
        renderButton({ onClick: handleOpen })
      ) : (
        <Button color="primary" onClick={handleOpen} {...props}>
          {title}
        </Button>
      )}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{ variant: "caret", sx: { minWidth } }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={(event) => {
              handleMenuItemClick(option, event, index);
              handleClose();
            }}
            selected={option.selected}
          >
            {option?.icon && (
              <Box sx={{ display: "inline-flex", mr: 1 }}>{option?.icon}</Box>
            )}
            {getOptionLabel(option)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Dropdown;

Dropdown.defaultProps = {
  options: [],
  title: null,
  handleMenuItemClick: () => {},
  getOptionLabel: (option) => option.label || "",
};

Dropdown.propTypes = {
  options: PropTypes.array,
  title: PropTypes.node,
  handleMenuItemClick: PropTypes.func,
  getOptionLabel: PropTypes.func,
  renderButton: PropTypes.func,
};
