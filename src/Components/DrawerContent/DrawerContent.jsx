import {
  ListItem,
  useTheme,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ListComponent, StyledButton } from "./Content.component";

export const DrawerComponent = ({ data, toggle }) => {
  const theme = useTheme();
  const location = useLocation();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ListComponent onClick={matchDownMD && toggle}>
      {data?.map((item, index) => (
        <ListItem disablePadding key={index}>
          <StyledButton
            to={`${item.pathname}`}
            component={Link}
            selected={location.pathname === item.pathname}
          >
            {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
            <ListItemText primary={`${item.text}`} />
          </StyledButton>
        </ListItem>
      ))}
    </ListComponent>
  )
}
