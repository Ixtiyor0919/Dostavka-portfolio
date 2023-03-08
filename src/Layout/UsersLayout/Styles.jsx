import React from "react";
import styled from "styled-components";
import { PublicDrawerData } from "../../Api/Data";
import { Drawer, Toolbar, Fab } from "@mui/material";
import { matchMD, matchSM } from "../../Themes/Breakpoints";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { DrawerComponent } from "../../Components/DrawerContent/DrawerContent";

export const AppToolbar = styled(Toolbar)`
  padding: unset;
  z-index: 99;
  height: unset;
`
export const Main = styled.div`
  margin-top: 40px;
  @media (max-width: ${matchMD}px) {
    margin-top: 46px;
  }
  @media (max-width: ${matchSM}px) {
    margin-top: ${(props) => (props.searchOpen ? "86px" : "21px")};
  }
`
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 5%;
  right: 5%;
  padding: 0;
  margin: 5px;
  border: none;
  display: flex;
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  background-color: transparent;
  z-index: ${(props) => (props.opened ? "2" : "1")};
  position: ${(props) => (props.opened ? "absolute" : "unset")};
  @media (max-width: ${matchSM}px) {
    display: flex;
  }
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #65906c;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
const StyledDrawer = styled(Drawer)`
.MuiDrawer-paper {
  width: 80%;
  height: 80vh;
  gap: 20px;
  top: 0;
  left: 0;
  z-index: 99;
  display: none;
  text-align: left;
  position: absolute;
  flex-direction: column;
  padding: 6rem 1.5rem 2rem 1.5rem;
  border-bottom-right-radius: 15px;
  transition: all .3s ease-in-out !important;
  background: linear-gradient(90deg, #494544 0%, #504b4a 100%);
  box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%),
    0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);
  @media (max-width: ${matchSM}px) {
    display: flex;
  }
}
`
export const KeyboardFab = styled(Fab)`
  width: 50px;
  height: 50px;
  color: #5a5a5a;
  background-color: #ffffff;
  :hover {
    background-color: #A4A4A3;
    color: #F5F5F5;
  }
  :active {
    background-color: #A4A4A3;
    color: #ffffff;
  }
}}
`
export const KeyboardIcon = styled(KeyboardArrowUpIcon)`
  font-size: 1.8rem;
`
export const Burger = ({ open, toggle, opened }) => {
  return (
    <StyledBurger opened={opened} open={open} onClick={toggle}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export const Menu = ({ open, toggle }) => {
  return (
    <StyledDrawer
      open={open}
      onClose={toggle}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
    >
      <Burger opened open={open} toggle={toggle} />
      <DrawerComponent toggle={toggle} data={PublicDrawerData} />
    </StyledDrawer>
  )
}
