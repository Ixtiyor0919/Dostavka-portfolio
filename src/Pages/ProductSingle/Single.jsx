import {
  SinglePagesLink,
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
} from "./Single.component";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SingleImg from "../../Assets/Images/SingleImg.png";
import { Contact } from "../../Components/Contact/Contact";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { HomeCards } from "../../Components/HomeCardsWrapper/HomeCards";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function Single() {
  const navigate = useNavigate();
  return (
    <>
      <NavLinkList />
      <SingleProduct>
          <SinglePagesLinkBox onClick={() => navigate(-1)}>
            <i
              class="bx bx-chevron-left"
              style={{
                width: "26px",
                height: "26px",
                background:
                  "linear-gradient(114.93deg, #618967 5.11%, #72A479 94%",
                color: "#fff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "25px",
              }}
            ></i>
            <SinglePagesLink>Вернуться назад</SinglePagesLink>
          </SinglePagesLinkBox>
        <SingleProductMain>
          <SingleFab onClick={() => navigate(-1)} size="small" aria-label="back">
            <KeyboardArrowLeftIcon sx={{ fontSize: "1.8rem" }} />
          </SingleFab>
          <SingleProductImg
            src={SingleImg}
            alt="singl-product"
            width="50%"
            height="100%"
          />
          <SingleProductData>
            <Box>
              <SingleProductTitle>Ягненок</SingleProductTitle>
              <SingleProductDescription>
                помидор, сыр фета, масло подсолнечное, капуста пекинская, перец
                сладкий красный, огурцы, оливки без косточек
              </SingleProductDescription>
            </Box>
            <SingleProductWeightMain>Вес: 210 г</SingleProductWeightMain>
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
              <SingleProductCount>259 ₽</SingleProductCount>
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
                <SingleProductContentNames>Углеводы</SingleProductContentNames>
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
