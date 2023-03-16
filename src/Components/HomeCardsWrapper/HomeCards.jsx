import {
  GradientLine,
  HomeCardsInnerSlider,
  HomeCardsInnerTop,
  HomeCardsInnerTopTitle,
  HomeCardsWrapper,
} from "./HomeCards.component";
import React from "react";
import "swiper/css";
import "./Slider.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeDefaultCard } from "../DefaultCard/DefaultCard";
export function HomeCards({title, data, id}) {
  return (
    <>
      <GradientLine />
      <HomeCardsWrapper id={id}>
        <HomeCardsInnerTop>
          <HomeCardsInnerTopTitle>{title}</HomeCardsInnerTopTitle>
        </HomeCardsInnerTop>
        <HomeCardsInnerSlider>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // centeredSlides={true}
            className="mySwiper"
            // modules={[FreeMode, Pagination]}
            breakpoints={{
              // 400: {
              //   slidesPerView: 1,
              //   spaceBetween: 15,
              // },
              // 768: {
              //   slidesPerView: 2,
              //   spaceBetween: 25,
              // },
              // 1024: {
              //   slidesPerView: 3,
              //   spaceBetween: 30,
              // },
              // 1440: {
              //   slidesPerView: 4,
              //   spaceBetween: 30,
              // },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 4.5,
                spaceBetween: 15,
              },
            }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <HomeDefaultCard
                item={item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </HomeCardsInnerSlider>
      </HomeCardsWrapper>
    </>
  )
}
