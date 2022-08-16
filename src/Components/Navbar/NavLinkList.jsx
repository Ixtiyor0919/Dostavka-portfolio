import { NavLinkShablon } from "../NavLinkComponent/NavLinkShablon";
import { NavbarContainer, NavbarContainerLine, NavbarContainerLineFirst } from "./NavLink.component";

export function NavLinkList() {

    return (
        <>
        {/* <NavbarContainerLineFirst /> */}
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