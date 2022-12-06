import {
  ActionCardBox,
  ActionCardBoxData,
  ActionCardBoxDescription,
  ActionCardBoxImg,
  ActionCardBoxTitle,
  ActionCardInnerBox,
} from "./ActionCard.component"

function ActionCard(props) {
  return (
    <ActionCardBox>
      <ActionCardBoxImg
        alt="action-image"
        src={props.img}
        style={{ width: "100%" }}
      />
      <ActionCardInnerBox>
        <ActionCardBoxTitle>{props.title}</ActionCardBoxTitle>
        <ActionCardBoxDescription>{props.description}</ActionCardBoxDescription>
        <ActionCardBoxData>{props.data}</ActionCardBoxData>
      </ActionCardInnerBox>
    </ActionCardBox>
  )
}

export default ActionCard
