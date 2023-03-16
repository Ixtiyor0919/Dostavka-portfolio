import {
  HeaderBtn,
  LocalIcon,
  PhoneIcon,
  SearchIcon,
  ContactBox,
  AddresInput,
  LoginButton,
  HeaderMiddle,
  ContactTitle,
  BadgeContent,
  LoginButtonHr,
  ContactNumber,
  HeaderBtnLine,
  HeaderBtnCount,
  AddresInputBox,
  HeaderCartIcon,
  HeaderContainer,
  ContactBoxInner,
  LoginButtonIcon,
  LoginButtonText,
  HeaderIconButton,
  LocalButton,
} from "./Header.component";
import React from "react";
import { Burger } from "../Styles";
import { Menu } from "../Menu/Menu";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LogoSvgImage } from "../../../Assets/Svg/SvgImages";
import CartModal from "../../../Components/CartModal/CartModal";
// import GoogleMaps from "../../../Components/SearchFilterInput/SearchInput";

export function Header() {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const [colors, setColor] = React.useState(false)
  const [cartOpen, setCartOpen] = React.useState(false)
  let search = useSelector((state) => state.searchReducer.search)
  const [searchOpen, setSearchOpen] = React.useState(search)
  let currentCart = useSelector((state) => state.cartReducer?.currentCart)
  const handleColorToggle = () => {
    setColor(!colors)
  }
  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen)
    dispatch({ type: "SEARCH_SUCCESS", search: !searchOpen })
  }
  const handleDrawerToggle = () => {
    setOpen(!open)
  }
  const handleCart = () => {
    currentCart?.length ? setCartOpen(false) : setCartOpen(true)
  }
  return (
    <>
      <HeaderContainer searchopen={searchOpen}>
        <IconButton>
          <Burger open={open} toggle={handleDrawerToggle} />
        </IconButton>
        <Menu toggle={handleDrawerToggle} open={open} />
        <Link style={{ marginRight: "auto" }} to="/" className="link">
          <LogoSvgImage width="60" height="45" />
        </Link>
        <HeaderMiddle searchopen={searchOpen}>
          {/* <GoogleMaps /> */}
          <AddresInputBox searchopen={searchOpen}>
            <LocalButton onClick={handleColorToggle} colors={colors} aria-label="location">
              <LocalIcon searchopen={searchOpen} />
            </LocalButton>
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
          <LoginButton none component={Link} to="/login">
            <LoginButtonHr none />
            <LoginButtonIcon />
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
        </HeaderMiddle>
        <HeaderBtn
          onClick={handleCart}
          endIcon={
            <BadgeContent
              badgeContent={currentCart ? currentCart?.length : 0}
            >
              <HeaderCartIcon />
            </BadgeContent>
          }
          component={Link}
          to={`/${currentCart?.length ? "MainCart" : "/"}`}
        >
          Корзина
          <HeaderBtnLine />
          <HeaderBtnCount>
            {currentCart ? currentCart?.length : 0}
          </HeaderBtnCount>
        </HeaderBtn>
        <CartModal open={cartOpen} setOpen={setCartOpen} />
      </HeaderContainer>
    </>
  )
}
