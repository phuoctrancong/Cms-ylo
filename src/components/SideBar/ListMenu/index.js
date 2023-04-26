import React, { useEffect, useRef, useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../hooks";
import ListMenuStyled from "./style";
import Icon from "../../Icon";
import { useTranslation } from "react-i18next";
import { isEmpty } from "lodash";
import SubMenu from "./SubMenu";

const ListMenu = ({ routes = [] }) => {
  const [open, setOpen] = useState();

  const { pathname } = useLocation();
  const { t } = useTranslation(["yolo"]);
  const { isMdUpMinimal, isMdDown, setIsMinimal } = useSidebar();

  const isActive = (path = "") =>
    pathname === path ||
    pathname === `${path}/` ||
    (path.split("/").length > 2 && pathname.includes(`${path}/`));
  const isActiveChildren = (subs = []) => subs.some((m) => isActive(m.path));
  const isOpen = (index, subs) =>
    open === index || (open === undefined && isActiveChildren(subs));
  const toggle = (index, subs) => {
    if (isEmpty(subs)) return;

    setOpen(isOpen(index, subs) ? null : index);
  };
  const [hoverMenu, setHoverMenu] = useState("");

  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef([]);

  useEffect(() => {
    popoverAnchor.current = popoverAnchor.current.slice(0, routes.length);
  }, [routes]);
  const handlePopoverOpen = (menuName) => {
    setHoverMenu(menuName);
    setOpenedPopover(true);
  };

  const handlePopoverClose = () => {
    setOpenedPopover(false);
  };

  // const visibleMenus = routes.filter((r) => {
  //   if (!r?.subMenu?.length) {
  //     return canAccess(r?.code)
  //   }

  //   return (
  //     (r?.code && canAccess(r?.code)) ||
  //     r?.subMenu?.some((s) => s?.isInSidebar && canAccess(s?.code))
  //   )
  // })
  return (
    <ListMenuStyled open={!isMdUpMinimal} component="div">
      {routes.map((route, index) => {
        const visibleSubMenu = route?.subMenu?.filter(
          (item) => item?.isInSideBar
        );
        return (
          <React.Fragment key={index}>
            <ListItemButton
              ref={(el) => (popoverAnchor.current[index] = el)}
              {...(route.path ? { component: Link, to: route.path } : {})}
              {...(isMdUpMinimal
                ? {
                    onMouseOver: () => handlePopoverOpen(route.name),
                    onMouseOut: handlePopoverClose,
                  }
                : {
                    onClick: () => toggle(index, visibleSubMenu),
                  })}
              sx={{
                mt: index === 0 ? 0 : "8px",
                px: "10px",
              }}
              className={clsx({
                active:
                  isActive(route.path) ||
                  (isMdUpMinimal && isActiveChildren(route.subMenu)),
              })}
            >
              <ListItemIcon
                sx={{
                  minWidth: "unset",
                  mr: "10px",
                }}
              >
                <Icon name={route.icon} fill="#fff" size={20} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h5"
                    color="#fff"
                    noWrap
                    sx={{
                      fontWeight: 400,
                    }}
                  >
                    {t(`menu.${route.name}`)}
                  </Typography>
                }
              />
            </ListItemButton>
            <SubMenu
              route={route}
              visibleSubMenu={visibleSubMenu}
              // currentModule={currentModule}
              isExpanded={isOpen(index, visibleSubMenu)}
              anchorEl={popoverAnchor.current[index]}
              openPopover={openedPopover}
              handlePopoverOpen={handlePopoverOpen}
              handlePopoverClose={handlePopoverClose}
              hoverMenu={hoverMenu}
            >
              {!isEmpty(visibleSubMenu) ? (
                <List
                  component="div"
                  disablePadding
                  sx={isMdUpMinimal ? {} : { pl: "40px" }}
                >
                  {visibleSubMenu.map((menuItem) => (
                    <ListItemButton
                      component={Link}
                      to={menuItem?.path}
                      key={menuItem?.path}
                      sx={{ py: "5px", px: "10px" }}
                      className={clsx({
                        active: isActive(menuItem.path),
                      })}
                      {...(isMdDown
                        ? {
                            onClick: () => setIsMinimal(true),
                          }
                        : {})}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="h5"
                            color="#fff"
                            noWrap
                            sx={{
                              fontWeight: 400,
                            }}
                          >
                            {t(`menu.${menuItem.name}`)}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  ))}
                </List>
              ) : (
                t(`menu.${route.name}`)
              )}
            </SubMenu>
          </React.Fragment>
        );
      })}
    </ListMenuStyled>
  );
};

export default ListMenu;
