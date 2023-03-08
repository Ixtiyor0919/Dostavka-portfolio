import React from "react";
import {
  CardImg,
  HomeCard,
  HomeCardCart,
  HomeCardCost,
  HomeInnerBtn,
  HomeCardCount,
  HomeInnerCard,
  HomeCardTitle,
  HomeCardWeight,
  HomeInnerBtnBox,
  HomeCardDescription,
} from "./DefaultCard.component";
import { Link } from "react-router-dom";
import { CartData } from "../../Api/Data";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HomeCardImg from "../../Assets/Images/HomeCardImg.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export function HomeDefaultCard({ id, title, body, weight, cost, click }) {
  const [ count, setCount ] = React.useState(0)
  const [ toggle, setToggle ] = React.useState(false)
  const handleClickRemove = () => {
    setCount(count - 1)
    localStorage.setItem(`${title}`, count)
  }
  const handleClickAdd = () => {
    setCount(count + 1)
    localStorage.setItem(`${title}`, count)
  }
  const handleHoverBtn= () => {
    setToggle(!toggle)
  }
  const countLocal = localStorage.getItem(`${title}`, count)
  return (
    <HomeCard onClick={click}>
      <Link to="/Single" className="link" style={{ display: "block" }}>
        <CardImg src={HomeCardImg} alt="HomeCardImage" />
        <HomeCardCount onClick={handleHoverBtn}>{countLocal > 0 ? countLocal : 0}</HomeCardCount>
        <HomeInnerCard>
          <HomeCardTitle>{title}</HomeCardTitle>
          <HomeCardWeight>{weight}</HomeCardWeight>
          <HomeCardDescription>{body}</HomeCardDescription>
          <HomeInnerBtnBox>
            <HomeCardCost>620 ₽</HomeCardCost>
            <Link to={`/${CartData?.length > 0 ? 'MainCart' : ''}`} className="link">
              <HomeCardCart>
                В корзину
                <AddShoppingCartIcon
                  style={{
                    width: "24px",
                    height: "24px",
                    marginLeft: "16px",
                  }}
                />
              </HomeCardCart>
            </Link>
          </HomeInnerBtnBox>
        </HomeInnerCard>
      </Link>
      <HomeInnerBtn toggle={toggle} style={{ left: "15px" }}>
        <RemoveIcon onClick={handleClickRemove} sx={{ fontSize: "1.8rem" }} />
      </HomeInnerBtn>
      <HomeInnerBtn toggle={toggle} style={{ right: "15px"}}>
        <AddIcon onClick={handleClickAdd} sx={{ fontSize: "1.8rem" }} />
      </HomeInnerBtn>
    </HomeCard>
  )
}
