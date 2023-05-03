import { ActionData } from "../../Api/Data";
import { ActionWrapper } from "./Action.component";
import { Contact } from "../../Components/Contact/Contact";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { Subtitle } from "../../Components/PublicSubtitle/Subtitle";
import ActionCard from "../../Components/ActionCard/ActionCard";
import { GradientLine } from "../../Components/HomeCardsWrapper/HomeCards.component";

const Action = () => {

  return (
    <>
      <NavLinkList />
      <Subtitle title="АКЦИИ" />
      <GradientLine />
      <ActionWrapper>
        {ActionData?.map((item) => (
          <ActionCard
            id={item.id}
            key={item.id}
            img={item.img}
            data={item.data}
            title={item.title}
            description={item.body}
          />
        ))}
      </ActionWrapper>
      <Contact />
    </>
  )
}

export default Action;
