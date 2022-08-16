import { HomeDefaultCard } from "../DefaultCard/DefaultCard";
import { HomeCardsInnerSlider, HomeCardsInnerTop, HomeCardsInnerTopLine, HomeCardsInnerTopTitle, HomeCardsWrapper, HomeLine } from "./HomeCards.component";

export function HomeCards(props) {

    // const HomeData = [
    //     {
    //         "id": 1,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 2,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 3,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 4,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 5,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 6,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
       
    //     {
    //         "id": 7,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 8,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 9,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 10,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    // ]

    return (
        <>
            <HomeLine />
            <HomeCardsWrapper>
                <HomeCardsInnerTop>
                    <HomeCardsInnerTopLine></HomeCardsInnerTopLine>
                    <HomeCardsInnerTopTitle>
                        {props.data}
                    </HomeCardsInnerTopTitle>
                </HomeCardsInnerTop>
                <HomeCardsInnerSlider>
                    <HomeDefaultCard />
                    <HomeDefaultCard />
                    <HomeDefaultCard />
                    <HomeDefaultCard />
                    {/* <HomeDefaultCard /> */}
                </HomeCardsInnerSlider>
            </HomeCardsWrapper>
            {/* <HomeLine></HomeLine> */}
        </>
    )
}