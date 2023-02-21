import {
  AddresInput,
  AddresInputBox,
  ContactBox,
  ContactBoxInner,
  ContactNumber,
  ContactTitle,
  HeaderBtn,
  HeaderBtnCount,
  HeaderBtnLine,
  HeaderBtnLink,
  HeaderBtnMedia,
  HeaderContainer,
  MenuBtn,
  MenuBtnBurger,
} from "./Header.component"
import { Link } from "react-router-dom"
import { Box, IconButton } from "@mui/material"
import { LogoSvgImage } from "../../Assets/Svg/SvgImages"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined"
import { NavbarContainerLineFirst } from "../Navbar/NavLink.component"
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"

export function Header() {
  const CartLength = localStorage.getItem("CartLength")

  return (
    <>
      <HeaderContainer>
        {/* <MenuBtn>
          <MenuBtnBurger />
        </MenuBtn> */}
        <Link to="/" className="link">
          <LogoSvgImage width="55" height="45" />
        </Link>
        <Box
          sx={{
            m: "0 auto",
            width: "85%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <AddresInputBox>
            <IconButton aria-label="location" sx={{ color: "#fff" }}>
              <FmdGoodOutlinedIcon
                sx={{
                  width: "22px",
                  height: "22px",
                  color: "darkgrey",
                  cursor: "pointer",
                }}
              />
            </IconButton>
            <AddresInput
              className="input"
              placeholder="Введите адрес доставки"
            />
            <IconButton aria-label="search" sx={{ color: "#fff" }}>
              <SearchOutlinedIcon
                sx={{
                  color: "darkgrey",
                  marginLeft: "auto",
                  width: "22px",
                  height: "22px",
                  cursor: "pointer",
                }}
              />
            </IconButton>
          </AddresInputBox>
          <ContactBox>
            <PhoneInTalkOutlinedIcon
              sx={{
                fontSize: "2.3rem",
                color: "#fff",
                padding: "10px",
                borderRadius: "50%",
                marginLeft: "auto",
                cursor: "pointer",
                background:
                  "linear-gradient(114.93deg, #618967 5.11%, #72A479 94%)",
              }}
            />
            <ContactBoxInner>
              <ContactTitle>Контакты:</ContactTitle>
              <ContactNumber>+7 (917) 510-57-59</ContactNumber>
            </ContactBoxInner>
          </ContactBox>
        </Box>
        <HeaderBtn>
          <Link to="/MainCart" className="link">
            <HeaderBtnLink>Корзина</HeaderBtnLink>
          </Link>
          <HeaderBtnLine />
          <HeaderBtnCount>{CartLength}</HeaderBtnCount>
        </HeaderBtn>
        <HeaderBtnMedia>
          <ShoppingCartOutlinedIcon style={{ color: "#fff" }} />
          <HeaderBtnLine />
          <HeaderBtnLink>kорзина</HeaderBtnLink>
        </HeaderBtnMedia>
      </HeaderContainer>
      <NavbarContainerLineFirst />
    </>
  )
}
