import React from "react";
import {
  TabsItem,
  TabsList,
  NavbarContainer,
  StyledLink,
  NavWrapper,
  NavItem,
} from "./NavLink.component";
import { useSelector } from "react-redux";
import { categoryData } from "../../Api/Data";

function NavLinkList() {
  // let { category } = useSelector((state) => state.categoryReducer);
  const [value, setValue] = React.useState("Cold-snacks")

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  let search = useSelector((state) => state.searchReducer.search)
  return (
    <>
      <NavbarContainer searchOpen={search}>
        <TabsList
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
        >
          {categoryData?.map(({value}, index) => (
            <TabsItem key={index} value={value} label={value} />
          ))}
        </TabsList>
        {/* <NavWrapper>
          {categoryData?.map(({value}, index) => (
            <StyledLink
              to={`${value}`}
              key={index}
              spy={true}
              offset={-70}
              smooth={true}
              duration={1000}
            >
              <NavItem>{value}</NavItem>
            </StyledLink>
          ))}
        </NavWrapper> */}
      </NavbarContainer>
    </>
  )
}

export default NavLinkList
