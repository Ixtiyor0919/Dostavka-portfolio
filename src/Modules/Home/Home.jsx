import { Header } from '../../Components/Header/Header';
import MenuCardImgNewProducts from '../../Assets/Images/MenuCardImgNewProducts.svg';
import MenuCardBestCHefs from '../../Assets/Images/MenuCardBestCHefs.svg';
import { HomeMain, HomeTitle, MenuCardsBox, MenuCardsBoxCard, MenuCardsBoxCardTitle, MenuDescriptionBox, MenuDescriptionBoxBtn, MenuDescriptionBoxText, MenuDescriptionBoxTitle, MenuWrapper } from "./Home.component";
import { HomeCards } from '../../Components/HomeCardsWrapper/HomeCards';
import { Contact } from '../../Components/Contact/Contact';
import { Footer } from '../../Components/Footer/Footer';
import NavLinkList from '../../Components/Navbar/NavLinkList';

function Home() {

    // const HomeData = [
    //     {
    //         "id": 1,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 2,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 3,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 4,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 5,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 6,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
       
    //     {
    //         "id": 7,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 8,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 9,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    //     {
    //         "id": 10,
    //         "title": "Ягненок",
    //         "weight": 'Вес: 225 г',
    //         "body": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    //         "cost": '620 ₽',
    //     },
    // ]

    return (
        <>
            <Header />
            <HomeMain>
                <HomeTitle>
                    Доставка ВКУСНЕЙШИХ БЛЮд за 60 минут
                </HomeTitle>
            </HomeMain>
            <NavLinkList />
            <HomeCards data={'ХОЛОДНЫЕ ЗАКУСКИ'} />
            <HomeCards data={'ГОРЯЧИЕ ЗАКУСКИ'} />
            <HomeCards data={'Мясные блюда'} />
            <MenuWrapper>
                <MenuDescriptionBox>
                    <MenuDescriptionBoxTitle>
                        НАШЕ КАФЕ
                    </MenuDescriptionBoxTitle>
                    <MenuDescriptionBoxText>
                        Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
                    </MenuDescriptionBoxText>
                    <MenuDescriptionBoxBtn>
                        ПОСМОТРЕТЬ МЕНЮ
                    </MenuDescriptionBoxBtn>
                </MenuDescriptionBox>
                <MenuCardsBox>
                    <MenuCardsBoxCard>
                        <img src={MenuCardImgNewProducts}  alt="menu-img" />
                        <MenuCardsBoxCardTitle>
                            Свежайшие продукты
                        </MenuCardsBoxCardTitle>
                    </MenuCardsBoxCard>
                    <MenuCardsBoxCard>
                        <img src={MenuCardImgNewProducts}  alt="menu-img" />
                        <MenuCardsBoxCardTitle>
                            Свежайшие продукты
                        </MenuCardsBoxCardTitle>
                    </MenuCardsBoxCard>
                    <MenuCardsBoxCard>
                        <img src={MenuCardBestCHefs}  alt="menu-img" />
                        <MenuCardsBoxCardTitle>
                            Свежайшие продукты
                        </MenuCardsBoxCardTitle>
                    </MenuCardsBoxCard>
                    <MenuCardsBoxCard>
                        <img src={MenuCardBestCHefs}  alt="menu-img" />
                        <MenuCardsBoxCardTitle>
                            Свежайшие продукты
                        </MenuCardsBoxCardTitle>
                    </MenuCardsBoxCard>
                </MenuCardsBox>
            </MenuWrapper>
            <Contact />
            <Footer />
        </>
    )
}
export default Home;