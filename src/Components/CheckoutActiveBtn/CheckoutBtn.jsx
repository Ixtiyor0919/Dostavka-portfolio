import { useState } from "react";
import { CheckoutWrapperSecondItemTopInnerBtn } from "./Checkout.component";

export function CheckoutActiveBtn(props) {
    const [show, setShow] = useState(false)
    function btnActive() {
        setShow(!show)
    }

    return (
        <>
            <CheckoutWrapperSecondItemTopInnerBtn className={`btn ${show ? 'btn-active': 'btn-actived'}`} onClick={btnActive}>
                {props.btn}
            </CheckoutWrapperSecondItemTopInnerBtn>
        </>
    )
}