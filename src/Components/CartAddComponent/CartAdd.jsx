import {
  CartAddCard,
  CartAddCardCost,
  CartAddCardImg,
  CartAddCardInner,
  CartAddCardText,
  CartAddCardTitle,
} from "./CartAdd.component";
import { Box } from "@mui/material" ;
import { Icons } from "../CartIcons/Icons";
import AddIcon from '@mui/icons-material/Add';
import HomeCardImg from "../../Assets/Images/HomeCardImg.png";

export function CartAdd(props) {
  return (
    <CartAddCard>
      <CartAddCardImg src={HomeCardImg} width={210} height={120} />
      <CartAddCardTitle>{props.title}</CartAddCardTitle>
      <Box>
        <CartAddCardInner>
          <CartAddCardText>Добавить</CartAddCardText>
          <Icons Icon={AddIcon} size={18} width={25} height={25} />
        </CartAddCardInner>
        <CartAddCardCost>1640 ₽</CartAddCardCost>
      </Box>
    </CartAddCard>
  )
}
