import { CartCarCostBox, CartCardDescriptionBox, CartCardDescriptionBoxText, CartCardDescriptionBoxTitle, CartCardValue, CartCardValueBox, CartCardWrapperInner, CartCardWrapperInnerImg } from "./CartCard.component";
import HomeCardImg from '../../Assets/Images/HomeCardImg.png';
import { useState } from "react";

export function CartCard(props) {

    let [count, setCount] = useState(0)
    localStorage.setItem('count', count)

    return (
        <>
           <CartCardWrapperInner>
                <CartCardWrapperInnerImg src={HomeCardImg} width={120} height={90} />
                    <CartCardDescriptionBox>
                        <CartCardDescriptionBoxTitle>
                           {props.title}
                        </CartCardDescriptionBoxTitle>
                        <CartCardDescriptionBoxText>
                            {props.body}
                        </CartCardDescriptionBoxText>
                    </CartCardDescriptionBox>
                    <CartCardValueBox>
                        <i class='bx bxs-minus-circle' style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '33px',
                            color: '#72A479',
                            background: '#fff'}}
                            onClick={() => setCount(count -= 1)}>
                        </i>
                        <CartCardValue>
                            {count}
                        </CartCardValue>
                        <i class='bx bxs-plus-circle' style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '33px',
                            color: '#72A479',
                            background: '#fff'}}
                            onClick={() => setCount(count += 1)}>      
                        </i>
                    </CartCardValueBox>
                    <CartCarCostBox>
                        <CartCardValue>
                            1640 ₽
                        </CartCardValue>
                            <i class='bx bxs-x-circle' style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '33px',
                            color: '#72A479',
                            background: '#fff',
                            marginLeft: '72px'}}>

                            </i>
                    </CartCarCostBox>
            </CartCardWrapperInner> 
        </>
    )
}