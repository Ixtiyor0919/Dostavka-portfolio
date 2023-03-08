import {
  GradientLine,
  HomeCardsInnerSlider,
  HomeCardsInnerTop,
  HomeCardsInnerTopTitle,
  HomeCardsWrapper,
  HomeLine,
} from "./HomeCards.component";
import "swiper/css";
import "./Slider.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";
import { FreeMode, Pagination } from "swiper";
import { HomeCardData } from "../../Api/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeDefaultCard } from "../DefaultCard/DefaultCard";
export function HomeCards(props) {
  const dispatch = useDispatch();

  const handleCard = (item) => {
    dispatch({type: 'SINGLE_SUCCESS', currentSingle: item})
    console.log("Clicked", item)
  }
  return (
    <>
      {/* <HomeLine /> */}
      <GradientLine />
      <HomeCardsWrapper>
        <HomeCardsInnerTop>
          <HomeCardsInnerTopTitle>{props.data}</HomeCardsInnerTopTitle>
        </HomeCardsInnerTop>
        <HomeCardsInnerSlider>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // centeredSlides={true}
            className="mySwiper"
            // modules={[FreeMode, Pagination]}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {HomeCardData?.map((item) => (
              <SwiperSlide key={item.id}>
                <HomeDefaultCard
                  id={item.id}
                  key={item.id}
                  body={item.text}
                  cost={item.cost}
                  title={item.title}
                  wieght={item.weight}
                  click={() => handleCard(item)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </HomeCardsInnerSlider>
      </HomeCardsWrapper>
      {/* <HomeLine></HomeLine> */}
    </>
  )
}
