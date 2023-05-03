import {
  HeaderBtn,
  LocalIcon,
  PhoneIcon,
  SearchIcon,
  ContactBox,
  AddresInput,
  LocalButton,
  HeaderMiddle,
  ContactTitle,
  BadgeContent,
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
import { Burger } from "../Styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu } from "../../MainLayout/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Language } from "../../../../Modules/Languages";
import LoginModal from "../../../../Components/LoginModal";
import { LogoSvgImage } from "../../../../Assets/Svg/SvgImages";
import CartModal from "../../../../Components/CartModal/CartModal";

export function Header() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [colors, setColor] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  let search = useSelector((state) => state.searchReducer.search);
  const [searchOpen, setSearchOpen] = React.useState(search);
  let currentCart = useSelector((state) => state.cartReducer?.currentCart);
  const handleColorToggle = () => {
    setColor(!colors)
  };
  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen)
    dispatch({ type: "SEARCH_SUCCESS", search: !searchOpen })
  };
  const handleDrawerToggle = () => {
    setOpen(!open)
  };
  const handleCart = () => {
    currentCart?.length ? setCartOpen(false) : setCartOpen(true)
  };
  return (
    <>
      <HeaderContainer sx={{background: '#403C3B'}} searchopen={searchOpen}>
        <Burger open={open} toggle={handleDrawerToggle} />
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
          <LoginModal header />
          <Language header />
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
          to={`/${currentCart?.length ? "cart-product" : ""}`}
        >
          {t('header-cart')}
          <HeaderBtnLine />
          <HeaderBtnCount>
            {currentCart ? currentCart?.length : 0}
          </HeaderBtnCount>
        </HeaderBtn>
        <CartModal open={cartOpen} setOpen={setCartOpen} />
      </HeaderContainer>
    </>
  )
};