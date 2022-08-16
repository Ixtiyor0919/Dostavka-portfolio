import { useState } from "react";
import { NavbarLinks } from "./NavLinkShablon.com";

export function NavLinkShablon(props) {
    const [show, setShow] = useState(false)
    function linkActive() {
        setShow(!show)
    }

    return (
                <NavbarLinks className={`${show ? 'active': 'inactive'}`} onClick={linkActive}>
                        {props.title}
                </NavbarLinks>
    )
}