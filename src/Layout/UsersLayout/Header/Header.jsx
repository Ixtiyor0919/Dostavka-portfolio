import {
  HeaderBtn,
  LocalIcon,
  PhoneIcon,
  SearchIcon,
  ContactBox,
  AddresInput,
  HeaderMiddle,
  ContactTitle,
  ContactNumber,
  HeaderBtnLine,
  HeaderBtnCount,
  AddresInputBox,
  HeaderCartIcon,
  HeaderContainer,
  ContactBoxInner,
  HeaderIconButton,
} from "./Header.component";
import React from "react";
import { Link } from "react-router-dom";
import { Burger, Menu } from "../Styles";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LogoSvgImage } from "../../../Assets/Svg/SvgImages";

export function Header() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [colors, setColor] = React.useState(false)
  let search = useSelector((state) => state.searchReducer.search);
  const [searchOpen, setSearchOpen] = React.useState(search)
  const CartLength = localStorage.getItem("CartLength")
  const handleColorToggle = () => {
    setColor(!colors)
  }
  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen)
    dispatch({ type: "SEARCH_SUCCESS", search: !searchOpen });
  };
  const handleDrawerToggle = () => {
    setOpen(!open);
  }
  return (
    <>
      <HeaderContainer searchopen={searchOpen}>
        <IconButton>
          <Burger open={open} toggle={handleDrawerToggle} />
        </IconButton>
        <Menu toggle={handleDrawerToggle} open={open} />
        <Link style={{marginRight: 'auto'}} to="/" className="link">
          <LogoSvgImage width="60" height="45" />
        </Link>
        <HeaderMiddle searchopen={searchOpen}>
          <AddresInputBox searchopen={searchOpen}>
            <IconButton
              onClick={handleColorToggle}
              aria-label="location"
            >
              <LocalIcon colors={colors} searchopen={searchOpen} />
            </IconButton>
            <AddresInput
              className="input"
              placeholder="Введите адрес доставки"
              searchopen={searchOpen}
            />
            <HeaderIconButton color="inherit" onClick={handleSearchToggle}>
              <SearchIcon searchopen={searchOpen} />
            </HeaderIconButton>
          </AddresInputBox>
          <ContactBox>
            <PhoneIcon />
            <ContactBoxInner>
              <ContactTitle>Контакты:</ContactTitle>
              <ContactNumber>+7 (917) 510-57-59</ContactNumber>
            </ContactBoxInner>
          </ContactBox>
        </HeaderMiddle>
        <HeaderBtn endIcon={<HeaderCartIcon />} component={Link} to="/MainCart">
          Корзина
          <HeaderBtnLine />
          <HeaderBtnCount>{CartLength}</HeaderBtnCount>
        </HeaderBtn>
      </HeaderContainer>
    </>
  )
}