import {
  Link,
  Box,
  Drawer,
  useTheme,
  useMediaQuery,
  Toolbar,
  Divider,
  CssBaseline,
} from "@mui/material";
import * as React from "react";
import appDrawerWidth from "../../../Utils/Constant";
import { PrivateDrawerData } from "../../../Api/Data";
import { Link as RouterLink } from "react-router-dom";
import { LogoSvgImage } from "../../../Assets/Svg/SvgImages";
import { DrawerComponent } from "../../../Components/DrawerContent/DrawerContent";

export const Sidebar = (props) => {
  const theme = useTheme()
  const { window, open, handleDrawerToggle } = props
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"))

  const drawer = (
    <Box sx={{ height: "100%" }}>
      <Toolbar
        sx={{ display: "flex", height: "100px", justifyContent: "center" }}
      >
        <Link to="/" component={RouterLink} sx={{ display: "grid" }}>
          <LogoSvgImage width="80" height="60" />
        </Link>
      </Toolbar>
      <Divider sx={{ border: "1px solid rgb(199 199 199 / 12%)" }} />
      <Box sx={{p: "10px 20px"}}>
        <DrawerComponent data={PrivateDrawerData} toggle={handleDrawerToggle} />  
      </Box>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { md: open && appDrawerWidth },
          flexShrink: { md: 0 },
          backgroundColor: "linear-gradient(90deg, #494544 0%, #504b4a 100%)",
        }}
        aria-label="mailbox folders"
      >
        {!matchDownMD ? (
          <Drawer
            open={open}
            variant="persistent"
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: appDrawerWidth,
                zIndex: "14 !important",
                borderRight: "2px solid rgb(199 199 199 / 12%)",
                background: "linear-gradient(90deg, #494544 0%, #504b4a 100%)",
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            container={container}
            variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: appDrawerWidth,
                borderRight: "2px solid rgb(199 199 199 / 12%)",
                backgroundImage: "none",
                boxShadow: "inherit",
                background: "linear-gradient(90deg, #494544 0%, #504b4a 100%)",
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </Box>
    </Box>
  )
}
