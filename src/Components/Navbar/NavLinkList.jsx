import { NavbarContainer, NavbarContainerLine } from "./NavLink.component"
import { useState } from "react"
import { Box, Tab, Tabs } from "@mui/material"

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
            <Tab value="first" label="Холодные закуски" />
            <Tab value="second" label="Горячие закуски" />
            <Tab value="third" label="Мясные блюда" />
            <Tab value="fouth" label="Супы" />
            <Tab value="fifth" label="Рыбные блюда" />
            <Tab value="sixth" label="Гриль меню" />
            <Tab value="seventh" label="Фирменные блюда" />
            <Tab value="eightth" label="Напитки" />
          </Tabs>
        </Box>
      </NavbarContainer>
      <NavbarContainerLine />
    </>
  )
}

export default NavLinkList
