import { CartAddCard, CartAddCardCost, CartAddCardImg, CartAddCardInner, CartAddCardText, CartAddCardTitle } from "./CartAdd.component";
import HomeCardImg from '../../Assets/Images/HomeCardImg.png'

export function CartAdd(props) {

    return (
        <CartAddCard>
            <CartAddCardImg src={HomeCardImg} width={210} height={120} />
            <CartAddCardTitle>
                {props.title}
            </CartAddCardTitle>
            <CartAddCardInner>
                <CartAddCardText>
                    Добавить
                </CartAddCardText>
                <i class='bx bxs-plus-circle' style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    color: '#72A479',
                    cursor: 'pointer',
                    background: '#fff'}}>
                </i>
            </CartAddCardInner>
            <CartAddCardCost>
                1640 ₽
            </CartAddCardCost>
        </CartAddCard>
    )
}