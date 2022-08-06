import { HomeDefaultCard } from "../DefaultCard/DefaultCard";
import { HomeCardsInnerSlider, HomeCardsInnerTop, HomeCardsInnerTopLine, HomeCardsInnerTopTitle, HomeCardsWrapper, HomeLine } from "./HomeCards.component";

export function HomeCards(props) {
    return (
        <>
            <HomeLine></HomeLine>
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