import {
  BoxData,
  CartCardValue,
  CartButtonsBox,
  CartCarCostBox,
  CartCardValueBox,
  CartCardWrapperInner,
  CartCardDescriptionBox,
  CartCardWrapperInnerImg,
  CartCardDescriptionBoxText,
  CartCardDescriptionBoxTitle,
} from "./CartCard.component";
import { useState } from "react";
import { Icons } from "../CartIcons/Icons";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import { useMediaQuery, useTheme } from "@mui/material";
import HomeCardImg from "../../Assets/Images/HomeCardImg.png";
import { GradientLine } from "../HomeCardsWrapper/HomeCards.component";
import { CartAddWrapperInnerLine } from "../../Pages/MainCartDelivery/MainCart.component";

export function CartCard(props) {
  const theme = useTheme()
  let [count, setCount] = useState(0)
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"))
  const handleLocalCart = () => {
    setCount((count -= 1))
    localStorage.setItem(`${props.title}`, count)
  }
  const handleLocalCartCircle = () => {
    setCount((count += 1))
    localStorage.setItem(`${props.title}`, count)
  }

  const countPilus = localStorage.getItem(`${props.title}`, count)

  return (
    <>
      <CartCardWrapperInner>
        <CartCardWrapperInnerImg src={HomeCardImg} />
        <BoxData>
          <CartCardDescriptionBox>
            <CartCardDescriptionBoxTitle>
              {props.title}
            </CartCardDescriptionBoxTitle>
            <CartCardDescriptionBoxText>
              {props.body}
            </CartCardDescriptionBoxText>
          </CartCardDescriptionBox>
          <CartButtonsBox>
            <CartCardValueBox>
              <Icons
                Icon={RemoveIcon}
                width={!matchDownMD ? 30 : 22}
                height={!matchDownMD ? 30 : 22}
                size={!matchDownMD ? 20 : 18}
                onClick={handleLocalCart}
              />
              <CartCardValue>{countPilus}</CartCardValue>
              <Icons
                Icon={AddIcon}
                width={!matchDownMD ? 30 : 22}
                height={!matchDownMD ? 30 : 22}
                size={!matchDownMD ? 20 : 18}
                onClick={handleLocalCartCircle}
              />
            </CartCardValueBox>
            <CartCarCostBox>
              <CartCardValue>1640 ₽</CartCardValue>
              <Icons
                Icon={ClearIcon}
                width={!matchDownMD ? 30 : 22}
                height={!matchDownMD ? 30 : 22}
                size={!matchDownMD ? 20 : 16}
              />
            </CartCarCostBox>
          </CartButtonsBox>
        </BoxData>
      </CartCardWrapperInner>
      <GradientLine />
    </>
  )
}
