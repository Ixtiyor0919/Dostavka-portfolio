import {
  SinglePagesLinkBox,
  SingleProductData,
  SingleProduct,
  SingleProductCartBox,
  SingleProductCartBtn,
  SingleProductCartLine,
  SingleProductContentNames,
  SingleProductContentValues,
  SingleProductCount,
  SingleProductDescription,
  SingleProductImg,
  SingleProductInnerLine,
  SingleProductInnerNamesBox,
  SingleProductTitle,
  SingleProductWeightMain,
  SingleProductMain,
  SingleFab,
  KeyboardLeftIcon,
  SigleDataBottom,
} from "./Single.component";
import React from "react";
import { Box } from "@mui/material";
import Loader from "../../Components/Loader";
import { HomeCardData } from "../../Api/Data";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SingleImg from "../../Assets/Images/SingleImg.png";
import { Contact } from "../../Components/Contact/Contact";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { BackComponent } from "../../Components/BackButton/BackButton";
import { HomeCards } from "../../Components/HomeCardsWrapper/HomeCards";

function ProductSingle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { currentSingle, loading } = useSelector((state) => state.singleReducer);
  const { id, title, text, weight, cost, category } = currentSingle;
  const local = JSON.parse(localStorage.getItem(`${id}`));
  let [count, setCount] = React.useState(local !== null ? local : 0);
  const handleClickAdd = () => {
    setCount((count += 1))
    localStorage.setItem(`${id}`, count)
  };
  const handleCartClick = () => {
    if(!local) {
      dispatch({ type: "CART_START" });
      handleClickAdd()
      dispatch({ type: "CART_SUCCESS", data: currentSingle })
    }
  };
  const filtered = HomeCardData?.filter((item) => item.category === category);
  React.useEffect(() => {
    if(loading) {
      return <Loader />
    };
  }, [loading])
  return (
    <>
      <NavLinkList />
      <SingleProduct>
        <SinglePagesLinkBox>
          <BackComponent text="Вернуться назад" styled />
        </SinglePagesLinkBox>
        <SingleProductMain>
          <SingleFab
            size="small"
            aria-label="back"
            onClick={() => navigate(-1)}
          >
            <KeyboardLeftIcon />
          </SingleFab>
          <SingleProductImg src={SingleImg} alt="single product" />
          <SingleProductData>
            <Box>
              <SingleProductTitle>{title}</SingleProductTitle>
              <SingleProductDescription>{text}</SingleProductDescription>
            </Box>
            <SigleDataBottom>
              <SingleProductWeightMain>Вес: {weight}</SingleProductWeightMain>
              <SingleProductCartBox>
                <Link to="/cart-product" className="link">
                  <SingleProductCartBtn
                    onClick={handleCartClick}
                    endIcon={
                      <i
                        className="bx bx-shopping-bag"
                        style={{
                          color: "#ffffff",
                          backgroundColor: "transparent",
                          fontSize: "25px",
                        }}
                      ></i>
                    }
                  >
                    Корзина
                    <SingleProductCartLine />
                  </SingleProductCartBtn>
                </Link>
                <SingleProductCount>{cost}</SingleProductCount>
              </SingleProductCartBox>
              <SingleProductInnerNamesBox>
                <Box>
                  <SingleProductContentNames>Белки</SingleProductContentNames>
                  <SingleProductContentValues>17.23</SingleProductContentValues>
                </Box>
                <Box>
                  <SingleProductContentNames>Жиры</SingleProductContentNames>
                  <SingleProductContentValues>7.63</SingleProductContentValues>
                </Box>
                <Box>
                  <SingleProductContentNames>
                    Углеводы
                  </SingleProductContentNames>
                  <SingleProductContentValues>22.35</SingleProductContentValues>
                </Box>
                <Box>
                  <SingleProductContentNames>Ккал</SingleProductContentNames>
                  <SingleProductContentValues>234</SingleProductContentValues>
                </Box>
                <Box>
                  <SingleProductContentNames>Вес</SingleProductContentNames>
                  <SingleProductContentValues>210 г</SingleProductContentValues>
                </Box>
              </SingleProductInnerNamesBox>
            </SigleDataBottom>
            <SingleProductInnerLine />
          </SingleProductData>
        </SingleProductMain>
      </SingleProduct>
      <HomeCards id={category} title={category} data={filtered} />
      <Contact />
    </>
  )
}

export default ProductSingle;
