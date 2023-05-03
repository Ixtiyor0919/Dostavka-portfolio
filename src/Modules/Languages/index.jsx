import React from "react";
import i18next from "i18next";
import cookie from "js-cookie";
import { language } from "../../Api/Data";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { LanguageInner, LanguageWrapper } from "./StyleComponent";
import { Box, Button, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";

export const Language = ({drawer, header}) => {
  const {t} = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const currentLanguageCode = cookie.get("i18next") || "en";
  const menuId = "primary-language-menu";
  const handleMenuClose = () => {
    setAnchorEl(null)
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: { xs: 26, md: 20 },
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {language.map(({ code, name, country_code }) => (
        <MenuItem
          key={country_code}
          onClick={() => i18next.changeLanguage(code)}
          selected={code === currentLanguageCode}
          sx={{minHeight: 0, "&.Mui-selected": {
            color: '#ffffff', backgroundColor: 'rgb(121 121 121 / 50%)'
          }}}
        >
          <ListItemIcon>
            <Box
              component="span"
              className={`fi fi-${country_code}`}
              sx={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
            ></Box>
          </ListItemIcon>
          {name}
        </MenuItem>
      ))}
    </Menu>
  )

  return (
    <LanguageWrapper drawer={drawer} header={header}>
      <LanguageInner
        header={header}
        aria-haspopup="true"
        aria-label="show more"
        aria-controls={menuId}
        onClick={handleMenuOpen}
      >
        <Button
          size="large"
          variant="outlined"
          sx={{ padding: "6px", color: "grey", gap: '5px', borderColor: 'grey !important' }}
        >
          <LanguageIcon />
        <Typography sx={{color: "grey"}}>{t('language-title')}</Typography>
        </Button>
      </LanguageInner>
      {renderMenu}
    </LanguageWrapper>
  )
};