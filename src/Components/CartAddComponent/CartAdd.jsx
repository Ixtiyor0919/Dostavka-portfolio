import {
  CartAddCard,
  CartAddData,
  CartAddCardImg,
  CartAddCardCost,
  CartAddCardText,
  CartAddCardInner,
  CartAddCardTitle,
  CartAddDataBottom,
} from "./CartAdd.component";
import { Icons } from "../CartIcons/Icons";
import AddIcon from "@mui/icons-material/Add";
import { useMediaQuery, useTheme } from "@mui/material";
import HomeCardImg from "../../Assets/Images/HomeCardImg.png";

export function CartAdd(props) {
  const theme = useTheme()
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <CartAddCard>
      <CartAddCardImg src={HomeCardImg} />
      <CartAddData>
        <CartAddCardTitle>{props.title}</CartAddCardTitle>
        <CartAddDataBottom>
          <CartAddCardInner>
            <CartAddCardText>Добавить</CartAddCardText>
            <Icons
              Icon={AddIcon}
              size={!matchDownMD ? 18 : 16}
              width={!matchDownMD ? 26 : 20}
              height={!matchDownMD ? 26 : 20}
            />
          </CartAddCardInner>
          <CartAddCardCost>1640 ₽</CartAddCardCost>
        </CartAddDataBottom>
      </CartAddData>
    </CartAddCard>
  )
}
