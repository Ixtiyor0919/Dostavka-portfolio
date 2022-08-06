import { CartCarCostBox, CartCardDescriptionBox, CartCardDescriptionBoxText, CartCardDescriptionBoxTitle, CartCardValue, CartCardValueBox, CartCardWrapper, CartCardWrapperInner, CartCardWrapperInnerImg } from "./CartCard.component";

export function CartCard() {
    return (
        <>
            <CartCardWrapper>
                <CartCardWrapperInner>
                    <CartCardWrapperInnerImg />
                    <CartCardDescriptionBox>
                        <CartCardDescriptionBoxTitle>
                            ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ
                        </CartCardDescriptionBoxTitle>
                        <CartCardDescriptionBoxText>
                            Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто
                        </CartCardDescriptionBoxText>
                    </CartCardDescriptionBox>
                    <CartCardValueBox>
                        <CartCardValue>
                            1
                        </CartCardValue>
                    </CartCardValueBox>
                    <CartCarCostBox>
                        <CartCardValue>
                            1640 ₽
                        </CartCardValue>
                    </CartCarCostBox>
                </CartCardWrapperInner>
            </CartCardWrapper>
        </>
    )
}