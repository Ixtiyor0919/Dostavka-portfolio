import { useState } from "react";
import { Tabs } from "@mui/material";
import { useSelector } from "react-redux";
import { NavbarContainer, TabsItem } from "./NavLink.component";

function NavLinkList() {
  const [value, setValue] = useState(0);
  const handleChange = (newValue) => {
    setValue(newValue)
  }
  let search = useSelector((state) => state.searchReducer.search);

  return (
    <>
      <NavbarContainer searchOpen={search}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <TabsItem value={0} label="Холодные закуски" />
            <TabsItem value={1} label="Горячие закуски" />
            <TabsItem value={2} label="Мясные блюда" />
            <TabsItem value={3} label="Супы" />
            <TabsItem value={4} label="Рыбные блюда" />
            <TabsItem value={5} label="Гриль меню" />
            <TabsItem value={6} label="Фирменные блюда" />
            <TabsItem value={7} label="Напитки" />
          </Tabs>
      </NavbarContainer>
    </>
  )
}

export default NavLinkList;
