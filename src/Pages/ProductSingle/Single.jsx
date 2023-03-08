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
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SingleImg from "../../Assets/Images/SingleImg.png";
import { Contact } from "../../Components/Contact/Contact";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { BackComponent } from "../../Components/BackButton/BackButton";
import { HomeCards } from "../../Components/HomeCardsWrapper/HomeCards";

function Single() {
  const navigate = useNavigate()
  let currentSingle = useSelector((state) => state.singleReducer?.currentSingle)
  const { title, text, weight, cost } = currentSingle
  return (
    <>
      <NavLinkList />
      <SingleProduct>
        <SinglePagesLinkBox>
          <BackComponent text="Вернуться назад" styled />
        </SinglePagesLinkBox>
        <SingleProductMain>
          <SingleFab
            onClick={() => navigate(-1)}
            size="small"
            aria-label="back"
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
                <Link to="/MainCart" className="link">
                  <SingleProductCartBtn
                    endIcon={
                      <i
                        class="bx bx-shopping-bag"
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
      <HomeCards data={"С ЭТИМ ТОВАРОМ ПОКУПАЮТ"} />
      <Contact />
    </>
  )
}

export default Single
