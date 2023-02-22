import { NavbarContainer, NavbarContainerLine, TabsItem } from "./NavLink.component"
import { useState } from "react"
import { Box, Tabs } from "@mui/material"

function NavLinkList() {
  const [value, setValue] = useState("first")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <NavbarContainer>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <TabsItem value="first" label="Холодные закуски" />
            <TabsItem value="second" label="Горячие закуски" />
            <TabsItem value="third" label="Мясные блюда" />
            <TabsItem value="fouth" label="Супы" />
            <TabsItem value="fifth" label="Рыбные блюда" />
            <TabsItem value="sixth" label="Гриль меню" />
            <TabsItem value="seventh" label="Фирменные блюда" />
            <TabsItem value="eightth" label="Напитки" />
          </Tabs>
        </Box>
      </NavbarContainer>
      <NavbarContainerLine />
    </>
  )
}

export default NavLinkList
