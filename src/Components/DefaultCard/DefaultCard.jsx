import React from "react";
import {
  HomeCard,
  HomeCardCart,
  HomeCardCost,
  HomeCardCount,
  HomeCardDescription,
  HomeCardTitle,
  HomeCardWeight,
  HomeInnerBtnBox,
  HomeInnerCard,
  InnerCardRemove,
  InnerCardAdd,
  HomeInnerBtn,
  CardImg,
} from "./DefaultCard.component";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HomeCardImg from "../../Assets/Images/HomeCardImg.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export function HomeDefaultCard({ id, title, body, weight, cost }) {
  const { count, setCount } = React.useState(0)
  const handleClickRemove = () => {
    setCount((count -= 1))
    localStorage.setItem(`${title}`, count)
  }
  const handleClickAdd = () => {
    setCount((count += 1))
    localStorage.setItem(`${title}`, count)
  }

  const countLocal = localStorage.getItem(`${title}`, count)
  return (
    <HomeCard>
      <Link to="/Single" className="link" style={{ display: "block" }}>
        <CardImg
          src={HomeCardImg}
          alt="HomeCardImage"
        />
        <HomeCardCount>{countLocal > 0 ? countLocal : 0}</HomeCardCount>
        <HomeInnerCard>
          <HomeCardTitle>{title}</HomeCardTitle>
          <HomeCardWeight>{weight}</HomeCardWeight>
          <HomeCardDescription>{body}</HomeCardDescription>
          <HomeInnerBtnBox>
            <HomeCardCost>620 ₽</HomeCardCost>
            <Link to="/MainCart" className="link">
              <HomeCardCart>
                {cost}
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
      <HomeInnerBtn style={{left: '15px'}}>
        <RemoveIcon onClick={handleClickRemove} sx={{fontSize: '1.8rem'}}/>
      </HomeInnerBtn>
      <HomeInnerBtn style={{right: '15px'}}>
        <AddIcon onClick={handleClickAdd} sx={{fontSize: '1.8rem'}}/>
      </HomeInnerBtn>
    </HomeCard>
  )
}
