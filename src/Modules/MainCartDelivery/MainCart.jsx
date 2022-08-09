import { useNavigate } from "react-router-dom";
import { CartCard } from "../../Components/CartCards/CartCard";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { NavLinkList } from "../../Components/Navbar/NavLinkList";
import { CartCardWrapper, MainCartContainer, MainCartContainerInnerTop, MainCartContainerInnerTopLine, MainCartContainerInnerTopText, MainCartContainerInnerTopTitle, MainCartContainerTop, MainCartPagesLink, MainCartPagesLinkBox } from "./MainCart.component";

export function MainCart() {
    const navigate = useNavigate();
    const CartData = [
        {
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
        {
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        },
    ]

    return (
        <>
            <Header />
            <NavLinkList />
            <MainCartContainer>
                <MainCartContainerTop>
                    <MainCartPagesLinkBox onClick={() => navigate(-1)}>
                        <i class='bx bx-chevron-left' style={{
                            width: '26px',
                            height: '26px',
                            color: '#fff',
                            fontSize: '25px',
                            marginLeft: '5px'}}>
                        </i>
                        <MainCartPagesLink>
                             к выбору блюда
                        </MainCartPagesLink>
                    </MainCartPagesLinkBox>
                    <MainCartContainerInnerTop>
                        <MainCartContainerInnerTopLine></MainCartContainerInnerTopLine>
                        <MainCartContainerInnerTopTitle>
                            КОРЗИНА
                        </MainCartContainerInnerTopTitle>
                        <MainCartContainerInnerTopText>
                            (в корзине {CartData.length} товара)
                        </MainCartContainerInnerTopText>
                    </MainCartContainerInnerTop>
                </MainCartContainerTop>
                <CartCardWrapper>   
                    {
                        CartData.map(item =>
                            <CartCard key={item.id} id={item.id} title={item.title} body={item.body} /> 
                            )
                    }
                </CartCardWrapper>
            </MainCartContainer>
            <Footer />
        </>
    )
}