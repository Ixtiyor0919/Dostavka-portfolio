import { NavbarContainer, NavbarContainerLine, NavbarLinks } from "./NavLink.component";
import { NavLink } from "react-router-dom";

export function NavLinkList() {
    return (
        <>
        <NavbarContainer>
            <NavLink to='/' className='link'>
                <NavbarLinks>
                        Холодные закуски
                </NavbarLinks>
            </NavLink>
            <NavLink to='/' className='link'>
                <NavbarLinks>
                    Горячие закуски
                </NavbarLinks>
            </NavLink>
            <NavLink to='/' className='link'>
                <NavbarLinks>
                    Мясные блюда
                </NavbarLinks>
            </NavLink>
            <NavLink to='/' className='link'>
                <NavbarLinks>
                    Супы
                </NavbarLinks>
            </NavLink>
            <NavLink to='/' className='link'>
                <NavbarLinks>
                    Рыбные блюда
                </NavbarLinks>
            </NavLink>
            <NavLink to='/' className='link'>
                <NavbarLinks>
                    Гриль меню
                </NavbarLinks>
            </NavLink>
            <NavLink to='/' className='link'>
                <NavbarLinks>
                    Фирменные блюда
                </NavbarLinks>
            </NavLink>
            <NavLink to='/' className='link'>
                <NavbarLinks>
                    Напитки
                </NavbarLinks>
            </NavLink>
        </NavbarContainer>
        <NavbarContainerLine />
        </>
    )
}