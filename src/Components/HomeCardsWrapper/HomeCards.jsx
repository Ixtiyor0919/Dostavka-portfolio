import {
  GradientLine,
  HomeCardsInnerSlider,
  HomeCardsInnerTop,
  HomeCardsInnerTopTitle,
  HomeCardsWrapper,
  HomeLine,
} from "./HomeCards.component"
import "swiper/css"
import "./Slider.css"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import { FreeMode, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { HomeDefaultCard } from "../DefaultCard/DefaultCard"
export function HomeCards(props) {
  const homeData = [
    {
      id: 1,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 2,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 3,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 4,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 5,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 6,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },

    {
      id: 7,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 8,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 9,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 10,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
  ]

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
            modules={[FreeMode, Pagination]}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {homeData.map((item) => (
              <SwiperSlide key={item.id}>
                <HomeDefaultCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  wieght={item.weight}
                  body={item.body}
                  cost={item.cost}
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
