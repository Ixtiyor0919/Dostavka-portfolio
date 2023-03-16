import ActionImgFirst from "../../Assets/Images/ActionImgFirst.png";
import ActionImgThird from "../../Assets/Images/ActionImgThird.png";
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ActionImgSecond from "../../Assets/Images/ActionImgSecond.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';

export const PublicDrawerData = [{
    id: 1,
    pathname: "/",
    text: "О ресторане",
    icon: < ShoppingCartOutlinedIcon / >
  },
  {
    id: 2,
    pathname: "/",
    text: "Возврат товара",
    icon: < ShoppingCartOutlinedIcon / >
  },
  {
    id: 3,
    text: "DeliveryConditions",
    pathname: "/DeliveryConditions",
    icon: < ShoppingCartOutlinedIcon / >
  },
  {
    id: 4,
    text: "Action",
    pathname: "/Action",
    icon: < ShoppingCartOutlinedIcon / >
  }
]

export const PrivateDrawerData = [{
    id: 1,
    pathname: "/",
    text: "Branchs",
    icon: < ShoppingCartOutlinedIcon / >
  },
  {
    id: 2,
    pathname: "/users",
    text: "Users",
    icon: < PeopleOutlinedIcon sx = {
      {
        color: 'white'
      }
    }
    />
  },
  {
    id: 3,
    text: "Foods",
    pathname: "/foods",
    icon: < RestaurantMenuOutlinedIcon sx = {
      {
        color: 'white'
      }
    }
    />
  },
  {
    id: 4,
    text: "Orders",
    pathname: "/orders",
    icon: < ShoppingCartOutlinedIcon / >
  }
]

export const CartData = [{
    id: 1,
    title: "Ягненок",
    body: " rerum est autem sunt rem eveniet arichitecto",
  },
  {
    id: 2,
    title: "Индейка",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate",
  },
  {
    id: 3,
    title: "Гусь",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odiso et labore et velit aut",
  },
  {
    "id": 4,
    "title": "Утка",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sgunt rem eveniet architecto",
  },
  // {
  //     "id": 5,
  //     "title": "doloribus",
  //     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reictiendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  // },
  // {
  //     "id": 6,
  //     "title": "ea molesutias quasi exercitationem repellat qui ipsa sit aut",
  //     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius oddio et labore et velit aut",
  // },
  // {
  //     "id": 7,
  //     "title": "sunit aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sgunt rem eveniet architecto",
  // },
  // {
  //     "id": 8,
  //     "title": "qui egst esse",
  //     "body": "est rerum tempore vitae\nsequi sinbt nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  // },
  // {
  //     "id": 9,
  //     "title": "ea mollestias quasi exercitationem repellat qui ipsa sit aut",
  //     "body": "et iusto sed quo iure\nvodluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  // },
  // {
  //     "id": 10,
  //     "title": "sunt aut faciere repellat provident occaecati excepturi optio reprehenderit",
  //     "body": "quia et suscipit\nsuscipit recusandahe consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  // },
  // {
  //     "id": 11,
  //     "title": "qui est essqe",
  //     "body": "est rerum tempore vitae\nsejqui sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  // },
  // {
  //     "id": 12,
  //     "title": "ea moklestias quasi exercitationmem repellat qui ipsa sit aut",
  //     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  // },
]

export const HomeCardData = [{
    id: "1",
    title: "Ягненок",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "450 ₽",
    category: "Cold-snacks"
  },
  {
    id: "2",
    title: "Индейка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Hot-appetizers"
  },
  {
    id: "3",
    title: "Гусь",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "7 900 ₽",
    category: "Meat-dishes"
  },
  {
    id: "4",
    title: "Утка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "3 230 ₽",
    category: "Soups"
  },
  {
    id: "5",
    title: "doloribus",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Fish-dishes"
  },
  {
    id: "6",
    title: "occaecati",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Grill-menu"
  },
  {
    id: "7",
    title: "repellat",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Specialties"
  },
  {
    id: "8",
    title: "exercitationem",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Beverages"
  },
  {
    id: "9",
    title: "Ягненок",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "450 ₽",
    category: "Cold-snacks"
  },
  {
    id: "10",
    title: "Индейка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Hot-appetizers"
  },
  {
    id: "11",
    title: "Гусь",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "7 900 ₽",
    category: "Meat-dishes"
  },
  {
    id: "12",
    title: "exercitationem",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Beverages"
  },
  {
    id: "13",
    title: "Ягненок",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "450 ₽",
    category: "Cold-snacks"
  },
  {
    id: "14",
    title: "Индейка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Hot-appetizers"
  },
  {
    id: "15",
    title: "Гусь",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "7 900 ₽",
    category: "Meat-dishes"
  },
  {
    id: "16",
    title: "Утка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "3 230 ₽",
    category: "Soups"
  },
  {
    id: "17",
    title: "doloribus",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Fish-dishes"
  },
  {
    id: "18",
    title: "occaecati",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Grill-menu"
  },
  {
    id: "19",
    title: "repellat",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Specialties"
  },
  {
    id: "20",
    title: "exercitationem",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Beverages"
  },
  {
    id: "21",
    title: "Ягненок",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "450 ₽",
    category: "Cold-snacks"
  },
  {
    id: "22",
    title: "Гусь",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "7 900 ₽",
    category: "Meat-dishes"
  },
  {
    id: "23",
    title: "Утка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "3 230 ₽",
    category: "Soups"
  },
  {
    id: "24",
    title: "doloribus",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Fish-dishes"
  },
  {
    id: "25",
    title: "occaecati",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Grill-menu"
  },
  {
    id: "26",
    title: "repellat",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Specialties"
  },
  {
    id: "27",
    title: "exercitationem",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Beverages"
  },
  {
    id: "28",
    title: "Ягненок",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "450 ₽",
    category: "Cold-snacks"
  },
  {
    id: "29",
    title: "Индейка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Hot-appetizers"
  },
  {
    id: "30",
    title: "Гусь",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "7 900 ₽",
    category: "Meat-dishes"
  },
  {
    id: "31",
    title: "Утка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "3 230 ₽",
    category: "Soups"
  },
  {
    id: "32",
    title: "doloribus",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Fish-dishes"
  },
  {
    id: "33",
    title: "occaecati",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Grill-menu"
  },
  {
    id: "34",
    title: "repellat",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Specialties"
  },
  {
    id: "35",
    title: "exercitationem",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Beverages"
  },
  {
    id: "36",
    title: "Ягненок",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "450 ₽",
    category: "Cold-snacks"
  },
  {
    id: "37",
    title: "Индейка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Hot-appetizers"
  },
  {
    id: "38",
    title: "Гусь",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "7 900 ₽",
    category: "Meat-dishes"
  },
  {
    id: "39",
    title: "Утка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "3 230 ₽",
    category: "Soups"
  },
  {
    id: "40",
    title: "doloribus",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Fish-dishes"
  },
  {
    id: "41",
    title: "occaecati",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Grill-menu"
  },
  {
    id: "42",
    title: "repellat",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Specialties"
  },
  {
    id: "43",
    title: "exercitationem",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Beverages"
  },
  {
    id: "44",
    title: "Ягненок",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "450 ₽",
    category: "Cold-snacks"
  },
  {
    id: "45",
    title: "Индейка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Hot-appetizers"
  },
  {
    id: "46",
    title: "Гусь",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "7 900 ₽",
    category: "Meat-dishes"
  },
  {
    id: "47",
    title: "Утка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "3 230 ₽",
    category: "Soups"
  },
  {
    id: "48",
    title: "doloribus",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Fish-dishes"
  },
  {
    id: "49",
    title: "occaecati",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Grill-menu"
  },
  {
    id: "50",
    title: "repellat",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Specialties"
  },
  {
    id: "51",
    title: "exercitationem",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Beverages"
  },
  {
    id: "52",
    title: "Ягненок",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "450 ₽",
    category: "Cold-snacks"
  },
  {
    id: "53",
    title: "Индейка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Hot-appetizers"
  },
  {
    id: "54",
    title: "Гусь",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "7 900 ₽",
    category: "Meat-dishes"
  },
  {
    id: "55",
    title: "Утка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "3 230 ₽",
    category: "Soups"
  },
  {
    id: "56",
    title: "doloribus",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Fish-dishes"
  },
  {
    id: "57",
    title: "occaecati",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Grill-menu"
  },
  {
    id: "58",
    title: "repellat",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Specialties"
  },
  {
    id: "59",
    title: "exercitationem",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Beverages"
  },
  {
    id: "60",
    title: "Индейка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Hot-appetizers"
  },
  {
    id: "61",
    title: "Утка",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "3 230 ₽",
    category: "Soups"
  },
  {
    id: "62",
    title: "doloribus",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Fish-dishes"
  },
  {
    id: "63",
    title: "occaecati",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Grill-menu"
  },
  {
    id: "64",
    title: "repellat",
    weight: "225 г",
    text: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
    cost: "620 ₽",
    category: "Specialties"
  },
]

export const AccordionData = [{
    title: "У наших курьеров всегда должна быть сдача!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "У наших курьеров всегда должна быть сдача!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "У наших курьеров всегда должна быть сдача!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "У наших курьеров всегда должна быть сдача!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "У наших курьеров всегда должна быть сдача!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "У наших курьеров всегда должна быть сдача!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
]

export const ActionData = [{
    id: 1,
    title: "Без мяса? Здесь!",
    body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
    img: `${ActionImgFirst}`,
    data: "до 31 июля.",
  },
  {
    id: 2,
    title: "Выгодное комбо c напитками",
    body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
    img: `${ActionImgSecond}`,
    data: "до 31 июля.",
  },
  {
    id: 3,
    title: "Сырный бортик",
    body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
    img: `${ActionImgThird}`,
    data: "до 31 июля.",
  },
  {
    id: 4,
    title: "Выгодное комбо c напитками",
    body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
    img: `${ActionImgSecond}`,
    data: "до 31 июля.",
  },
  {
    id: 5,
    title: "Сырный бортик",
    body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
    img: `${ActionImgFirst}`,
    data: "до 31 июля.",
  },
  {
    id: 6,
    title: "Без мяса? Здесь!",
    body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
    img: `${ActionImgThird}`,
    data: "до 31 июля.",
  },
  {
    id: 7,
    title: "Сырный бортик",
    body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
    img: `${ActionImgThird}`,
    data: "до 31 июля.",
  },
  {
    id: 8,
    title: "Без мяса? Здесь!",
    body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
    img: `${ActionImgSecond}`,
    data: "до 31 июля.",
  },
  {
    id: 9,
    title: "Выгодное комбо c напитками",
    body: "Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный уп с ренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!",
    img: `${ActionImgFirst}`,
    data: "до 31 июля.",
  },
]

export const categoryData = [
  {
    label: "Холодные закуски",
    value: "Cold-snacks"
  },
  {
    label: "Горячие закуски",
    value: "Hot-appetizers"
  },
  {
    label: "Мясные блюда",
    value: "Meat-dishes"
  },
  {
    label: "Супы",
    value: "Soups"
  },
  {
    label: "Рыбные блюда",
    value: "Fish-dishes"
  },
  {
    label: "Гриль меню",
    value: "Grill-menu"
  },
  {
    label: "Фирменные блюда",
    value: "Specialties"
  },
  {
    label: "Напитки",
    value: "Beverages"
  },
];