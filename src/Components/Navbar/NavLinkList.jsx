import { NavLinkShablon } from "../NavLinkShablon";
import { NavbarContainer, NavbarContainerLine } from "./NavLink.component";

export function NavLinkList() {

    return (
        <>
        <NavbarContainer>
            <NavLinkShablon title={'Холодные закуски'} />
            <NavLinkShablon  title={'Горячие закуски'} />
            <NavLinkShablon  title={'Мясные блюда'} />
            <NavLinkShablon title={'Супы'} />
            <NavLinkShablon  title={'Рыбные блюда'} />
            <NavLinkShablon  title={'Гриль меню'} />
            <NavLinkShablon title={'Фирменные блюда'} />
            <NavLinkShablon  title={'Напитки'} />
        </NavbarContainer>
        <NavbarContainerLine />
        </>
    )
}